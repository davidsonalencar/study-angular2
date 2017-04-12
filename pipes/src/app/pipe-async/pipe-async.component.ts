import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'pipe-async',
    templateUrl: './pipe-async.component.html',
    styleUrls: ['./pipe-async.component.css']
})
export class PipeAsyncComponent implements OnInit {

    valueAsync1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Meu valor assíncrono 1'), 2000)
    });

    valueAsync2 = Observable
        .interval(3000)
        .map(value => 'Meu valor assíncrono 2');

    constructor() {
    }

    ngOnInit() {
    }

}
