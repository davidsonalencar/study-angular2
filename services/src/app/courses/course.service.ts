import {Injectable} from '@angular/core';

@Injectable() // with this metadata I can use DI
export class CourseService {

    private courses: string[] = ['Angular 2', 'Java', 'PhoneGap'];

    constructor() {
        console.log('CourseService');
    }

    getCourses() {
        return this.courses;
    }

    addCourse(name: string) {
        this.courses.push(name);
    }

}