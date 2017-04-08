import {Injectable} from '@angular/core';

@Injectable() // with this metadata I can use DI
export class CourseService {

    getCourses() {
        return ['Angular 2', 'Java', 'PhoneGap'];
    }

}