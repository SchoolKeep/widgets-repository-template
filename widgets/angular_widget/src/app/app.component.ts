import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ViewEncapsulation,
  inject,
  signal,
} from "@angular/core";
import { WIDGET_SDK } from "../widget-sdk.token";
import { HOST_ELEMENT } from "../constants";
import type { WidgetProps } from "../types";

@Component({
  selector: HOST_ELEMENT,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: "../../public/widget.css",
  encapsulation: ViewEncapsulation.ShadowDom,
  template: `
    <section class="angular-widget-section">
      <h2 class="angular-widget-title">{{ props().title ?? "" }}</h2>
      @if (props().description) {
        <p class="angular-widget-description">{{ props().description }}</p>
      }
    </section>
  `,
})
export class AppComponent {
  private readonly sdk = inject(WIDGET_SDK);
  private readonly destroyRef = inject(DestroyRef);
  readonly props = signal<WidgetProps>(this.sdk.getProps());

  constructor() {
    this.destroyRef.onDestroy(
      this.sdk.on("propsChanged", (data) => {
        this.props.set(data);
      }),
    );
  }
}
