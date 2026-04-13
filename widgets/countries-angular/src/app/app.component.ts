import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ViewEncapsulation,
  inject,
  signal,
} from "@angular/core";
import type { Country } from "../types";
import { CONNECTOR_PERMALINK, TOP_COUNTRIES_COUNT } from "../constants";
import { CountryCardComponent } from "./country-card.component";

@Component({
  selector: "countries-angular-root",
  standalone: true,
  imports: [CountryCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: "../../public/widget.css",
  encapsulation: ViewEncapsulation.ShadowDom,
  template: `
    <section class="angular-widget-section">
      <p class="widget-framework-header">Angular</p>
      @if (loading()) {
        <ul role="status" aria-label="Loading country data" class="country-list">
          @for (_ of skeletons; track $index) {
            <li class="country-item country-item--skeleton">
              <div class="country-flag country-flag--skeleton"></div>
              <div class="country-details">
                <div class="country-skeleton-line country-skeleton-line--name"></div>
                <div class="country-skeleton-line country-skeleton-line--meta"></div>
              </div>
            </li>
          }
        </ul>
      } @else if (error()) {
        <div role="alert" class="country-error"><p>{{ error() }}</p></div>
      } @else {
        <ul class="country-list">
          @for (c of countries(); track c.name) {
            <app-country-card [country]="c" />
          }
        </ul>
      }
    </section>
  `,
})
export class AppComponent {
  readonly countries = signal<Country[]>([]);
  readonly loading = signal<boolean>(true);
  readonly error = signal<string | null>(null);
  readonly skeletons = Array.from({ length: TOP_COUNTRIES_COUNT });

  constructor() {
    let cancelled = false;
    inject(DestroyRef).onDestroy(() => { cancelled = true; });

    (async () => {
      try {
        const raw = await new window.WidgetServiceSDK().connectors.execute({
          permalink: CONNECTOR_PERMALINK,
          method: "GET",
        });
        if (cancelled) return;
        this.countries.set(
          [...raw]
            .sort((a, b) => b.population - a.population)
            .slice(0, TOP_COUNTRIES_COUNT)
            .map(c => ({
              name: c.name.common,
              capital: c.capital?.[0] ?? "N/A",
              population: c.population,
              flag: c.flags.png,
              region: c.region,
            }))
        );
      } catch (e) {
        if (cancelled) return;
        this.error.set(e instanceof Error ? e.message : "Failed to load");
      } finally {
        if (!cancelled) this.loading.set(false);
      }
    })();
  }
}
