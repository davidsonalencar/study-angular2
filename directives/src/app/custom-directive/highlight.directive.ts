import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

    // Example custom attribute directive (behavior directive)

    @Input('highlight') highlight: string = 'yellow';

    @Input() defaultColor: string = 'white';
    @Input() highlightColor: string = null;


    @HostListener('mouseenter') onMouseOver() {
        this.backgroundColor = this.highlightColor ? this.highlightColor : this.highlight;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.backgroundColor = this.defaultColor;
    }

    @HostBinding('style.backgroundColor') backgroundColor: string;

    ngOnInit() {
        this.backgroundColor = this.defaultColor;
    }

    constructor() {
    }

}
