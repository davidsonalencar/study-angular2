import {Directive, HostListener, ElementRef, Renderer2, HostBinding} from '@angular/core';

@Directive({
    selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

    backgroundColor: string = '';

    // É um metadado
    @HostListener('mouseenter') onMouseOver() {
        // this._renderer.setStyle(
        //     this._element.nativeElement,
        //     'background-color', 'yellow'
        // );
        this.backgroundColor = 'yellow';
    }

    @HostListener('mouseleave') onMouseLeave() {
        // this._renderer.setStyle(
        //     this._element.nativeElement,
        //     'background-color', 'white'
        // );
        this.backgroundColor = 'white';
    }

    // Sem manipulacao
    // @HostBinding('style.backgroundColor') backgroundColor: string;
    // Com manipulacao
    @HostBinding('style.backgroundColor') get setColor() {
        // codigo extra
        return this.backgroundColor;
    };

    constructor(
        // private _element: ElementRef,
        // private _renderer: Renderer2
    ) {
    }

}
