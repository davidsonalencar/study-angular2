import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-directive-ngif',
    templateUrl: './directive-ngif.component.html',
    styleUrls: ['./directive-ngif.component.scss']
})
export class DirectiveNgifComponent implements OnInit {

    courses: string[] = [];

    showCourses: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    onToogleCourse() {
        this.showCourses = !this.showCourses;
    }

}
