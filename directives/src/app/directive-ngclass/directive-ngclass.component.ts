import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-directive-ngclass',
    templateUrl: './directive-ngclass.component.html',
    styleUrls: ['./directive-ngclass.component.scss']
})
export class DirectiveNgclassComponent implements OnInit {

    myFavorite: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    onClick() {
        console.log(this.myFavorite);
        this.myFavorite = !this.myFavorite;
    }

}
