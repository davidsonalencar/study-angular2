import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../courses/course.service';


@Component({
    selector: 'last-course',
    templateUrl: './last-course.component.html',
    styleUrls: ['./last-course.component.css']
})
export class LastCourseComponent implements OnInit {

    lastCourseName: string;

    constructor(
        private courseService: CourseService
    ) {}

    ngOnInit() {
        this.courseService.emitterCreatedCourse.subscribe(
            name => {
                this.lastCourseName = name;
                console.log('CourseService -> instance -> emitter');
            }
        )
    }

}
