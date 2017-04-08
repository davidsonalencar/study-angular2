import {NgModule} from '@angular/core';
import {CourseService} from '../courses/course.service';
import {CoursesCreateComponent} from './courses-create.component';
import {CommonModule} from '@angular/common';


@NgModule({
    declarations: [
        CoursesCreateComponent
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
