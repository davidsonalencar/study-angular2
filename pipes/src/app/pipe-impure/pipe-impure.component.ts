import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'pipe-impure',
    templateUrl: './pipe-impure.component.html',
    styleUrls: ['./pipe-impure.component.css']
})
export class PipeImpureComponent implements OnInit {

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

    getBooks() {
        if (this.books.length == 0 || this.filter == null || this.filter.trim() == '') {
            return this.books;
        }
        return this.books.filter((v) => {
            return v.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0;
        });
    }

}
