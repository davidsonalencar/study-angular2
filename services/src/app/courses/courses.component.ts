import {Component, OnInit} from '@angular/core';
import {CourseService} from './course.service';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

    courses: string[] = ['Angular 2', 'Java', 'PhoneGap'];
    //courseService: CourseService;

    constructor(
        public courseService: CourseService
    ) {
        //this.courseService = new CourseService();
    }

    ngOnInit() {
        this.courses = this.courseService.getCourses();
    }

}
