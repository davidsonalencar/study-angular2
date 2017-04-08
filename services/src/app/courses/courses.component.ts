import {Component, OnInit} from '@angular/core';
import {CourseService} from './course.service';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css'],
    providers: [CourseService]
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

        CourseService.staticEmitterCreatedCourse.subscribe(
            (name) => {
                this.courses.push(name);
                console.log('CourseService -> static -> emitter');
            }
        );

    }

}
