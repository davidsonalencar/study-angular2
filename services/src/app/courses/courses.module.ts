import {NgModule} from '@angular/core';
import {CourseService} from '../courses/course.service';
import {CommonModule} from '@angular/common';
import {CoursesComponent} from './courses.component';

@NgModule({
    declarations: [
        CoursesComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CoursesComponent
    ],
    //providers: [CourseService]
})
export class CoursesModule {
}
