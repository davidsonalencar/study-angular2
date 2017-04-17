import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CoursesComponent} from './courses/courses.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {routing} from './app.routing';
import { CourseViewComponent } from './courses/course-view/course-view.component';

@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent,
        HomeComponent,
        LoginComponent,
        CourseViewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
