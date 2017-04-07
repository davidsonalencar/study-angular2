import {Directive, Input, TemplateRef /*refer to own template*/, ViewContainerRef /*refer to content of template*/ } from '@angular/core';

/**
 * Example custom strutural directive
 */
@Directive({
    selector: '[myElse]'
})
export class MyElseDirective {

    constructor(
        private _templateRef: TemplateRef<any>,
        private _viewContainerRef: ViewContainerRef
    ) {}

    @Input()
    set myElse(condition: any) {
        if (!condition) {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        } else {
            this._viewContainerRef.clear();
        }
    }

}
