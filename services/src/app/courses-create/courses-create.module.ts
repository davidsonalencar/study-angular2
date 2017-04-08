import {NgModule} from '@angular/core';
import {CourseService} from '../courses/course.service';
import {CoursesCreateComponent} from './courses-create.component';
import {CommonModule} from '@angular/common';
import {LastCourseComponent} from './last-course/last-course.component';


@NgModule({
    declarations: [
        CoursesCreateComponent,
        LastCourseComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CoursesCreateComponent
    ],
    providers: [CourseService]
})
export class CoursesCreateModule {
}
