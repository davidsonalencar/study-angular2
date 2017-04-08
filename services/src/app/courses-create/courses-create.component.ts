import {Component, OnInit} from '@angular/core';
import {CourseService} from '../courses/course.service';

@Component({
    selector: 'courses-create',
    templateUrl: './courses-create.component.html',
    styleUrls: ['./courses-create.component.css']
})
export class CoursesCreateComponent implements OnInit {

    courses: string[] = [];

    constructor(
        private courseService: CourseService
    ) {}

    ngOnInit() {
        this.courses = this.courseService.getCourses();
    }

    onAddCourse(name: string) {
        this.courseService.addCourse(name);
    }

}
