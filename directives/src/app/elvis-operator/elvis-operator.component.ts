import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-elvis-operator',
    templateUrl: './elvis-operator.component.html',
    styleUrls: ['./elvis-operator.component.scss']
})
export class ElvisOperatorComponent implements OnInit {

    task: object = {
        describe: 'Descrição da tarefa',
        owner: {
            user: null
        }
    };

    constructor() {
    }

    ngOnInit() {
    }

}
