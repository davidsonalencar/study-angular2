import {Component, OnInit} from '@angular/core';

import * as _ from 'lodash';

@Component({
    selector: 'app-import-lib',
    templateUrl: './import-lib.component.html',
    styleUrls: ['./import-lib.component.sass']
})
export class ImportLibComponent implements OnInit {

    list: Array<string> = _.map( [1, 2, 3], (n) => `# ${n}` );

    constructor() {
    }

    ngOnInit() {
    }

}
