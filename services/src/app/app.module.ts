import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CourseService} from './courses/course.service';
import {CoursesCreateModule} from './courses-create/courses-create.module';
import {CoursesModule} from './courses/courses.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CoursesCreateModule,
        CoursesModule
    ],
    // providers: [CourseService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
