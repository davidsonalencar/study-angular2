import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'pipe-example',
    templateUrl: './pipe-example.component.html',
    styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

    book: any = {
        title: 'Learning JavaScript',
        rating: 4.54321,
        totalPages: 314,
        price: 44.99,
        dateThrow: new Date(2016, 5, 23),
        url: 'http://a.co/glqjpRP'
    };

    constructor() {
    }

    ngOnInit() {
    }

}
