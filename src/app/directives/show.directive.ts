import {Directive, TemplateRef,ViewContainerRef, Input, OnChanges} from '@angular/core';
@Directive({
  selector: '[show]'
})
export class ShowDirective {
  @Input() set show(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    
  }
}