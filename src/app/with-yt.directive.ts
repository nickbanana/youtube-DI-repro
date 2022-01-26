import { Directive, Inject, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { YT } from './type';
import { API } from './youtube.token';
export function extractAPI({ withYt }: WithYtDirective): YT {
  return withYt;
}
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[withYt]',
  providers: [
    {
      provide: API,
      deps: [WithYtDirective],
      useFactory: extractAPI
    }
  ]
})
export class WithYtDirective implements OnChanges {
  @Input()
  withYt: YT | null = null;

  constructor(
    @Inject(TemplateRef) private readonly templateRef: TemplateRef<{}>,
    @Inject(ViewContainerRef) private readonly vcr: ViewContainerRef
  ) {}

  ngOnChanges() {
    if (this.withYt) {
      this.vcr.createEmbeddedView(this.templateRef);
    }
  }

}
