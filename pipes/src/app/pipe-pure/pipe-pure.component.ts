import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'pipe-pure',
    templateUrl: './pipe-pure.component.html',
    styleUrls: ['./pipe-pure.component.css']
})
export class PipePureComponent implements OnInit {

    books: any = ['Angular2', 'Java', 'Ionic'];

    filter: string;

    constructor() {
    }

    ngOnInit() {
    }

    addBook(title: string) {
        this.books.push(title);
        console.log(this.books);
    }

}
