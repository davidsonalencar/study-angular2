import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
    selector: 'p[appBgYellow]'
})
export class BgYellowDirective {

    constructor(
        private _element: ElementRef,
        private _renderer: Renderer2
    ) {
        // Não recomendado pela equipe da Google pois pode ocorrer ataque XSS (Cross-Site Scripting)
        //this._element.nativeElement.style.backgroundColor = 'yellow';
        // Recomendado
        this._renderer.setStyle(
            this._element.nativeElement,
            'background-color',
            'yellow'
        );
    }

}
