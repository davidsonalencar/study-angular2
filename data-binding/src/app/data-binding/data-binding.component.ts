import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    templateUrl: './data-binding.component.html',
    styleUrls: ['./data-binding.component.css'],
    // styles: [
    //     `
    //         .highlight {
    //             background-color: yellow;
    //             font-weight: bold; 
    //         }
    //     `
    // ]
})
export class DataBindingComponent implements OnInit {

    url: string = 'http://google.com';

    cursoAngular: boolean = true;

    urlImagem: string = 'http://lorempixel.com/400/200/';

    conteudoAtual: string = '';

    conteudoSalvo: string = '';

    isMouseOver: boolean = false;

    constructor() { }

    getValor() {
        return 1;
    }

    getCurtiCurso() {
        return true;
    }

    onClick() {
        alert('Botão clicado!');
    }

    onKeyup(event: KeyboardEvent) {
        console.log(event);
        this.conteudoAtual = (<HTMLInputElement>event.target).value;
    }

    onSave(valor: string) {
        this.conteudoSalvo = valor;
    }

    onMouseSpan() {
        this.isMouseOver = !this.isMouseOver;
    }

    ngOnInit() {
    }

}