import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  InjectionToken,
  ViewEncapsulation,
  inject,
  signal,
} from "@angular/core";
import type { WidgetProps, WidgetSDK } from "../types";

export const WIDGET_SDK = new InjectionToken<WidgetSDK>("WIDGET_SDK");

@Component({
  selector: "countries-angular-root",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: "../widget.css",
  encapsulation: ViewEncapsulation.ShadowDom,
  template: `
    <section class="angular-widget-section">
      <h3 class="angular-widget-title">{{ props().title ?? "" }}</h3>
      @if (props().description) {
        <p class="angular-widget-description">{{ props().description }}</p>
      }
    </section>
  `,
})
export class AppComponent {
  private readonly sdk = inject(WIDGET_SDK);
  readonly props = signal<WidgetProps>(this.sdk.getProps());

  constructor() {
    inject(DestroyRef).onDestroy(this.sdk.on("propsChanged", (data) => this.props.set(data)));
  }
}
