import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CoursesComponent} from './courses/courses.component';
import {CourseService} from './courses/course.service';

@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [CourseService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
