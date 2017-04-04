import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'contador',
    template: `
        <div>
            <button type="button" class="btn btn-primary" (click)="decrementa()">-</button>
            <input type="text" readonly="" [value]="valor">
            <button type="button" class="btn btn-primary" (click)="incrementa()">+</button>
        </div>
    `,
    //outputs: ['mudouValor:onMudouValor']
})

export class OutputPropertyComponent {

    @Input() valor: number = 0;

    @Output() mudouValor = new EventEmitter();

    decrementa() {
        this.valor--;
        this.mudouValor.emit({novoValor: this.valor});
    }

    incrementa() {
        this.valor++;
        this.mudouValor.emit({novoValor: this.valor});
    }

    constructor() { } 
}