import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {CoursesComponent} from './courses/courses.component';
import {ModuleWithProviders} from '@angular/core';
import {CourseViewComponent} from './courses/course-view/course-view.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'courses',
        component: CoursesComponent
    },
    {
        path: 'course/:id',
        component: CourseViewComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);