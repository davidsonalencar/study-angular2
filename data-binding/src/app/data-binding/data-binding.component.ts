import { Component, OnInit } from '@angular/core';

import { InputPropertyComponent } from './input-property.component';

@Component({
    selector: 'app-data-binding',
    templateUrl: './data-binding.component.html',
    /*styles: [
         `
             .highlight {
                 background-color: yellow;
                 font-weight: bold;
             }
         `
    ],*/
    styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

    url: string = 'http://google.com';

    cursoAngular: boolean = true;

    urlImagem: string = 'http://lorempixel.com/400/200/';

    conteudoAtual: string = '';

    conteudoSalvo: string = '';

    isMouseOver: boolean = false;

    nome: string = 'Davidson Alencar';

    pessoa: object = {
        nome: 'Davidson',
        idade: 31
    };

    nomeCurso: string = 'Curso: TypeScript 2';

    valorInicial: number = 20;

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

    onValorMudou(event) {
        console.log(event);
        alert(event.novoValor);
    }

    ngOnInit() {
    }

}