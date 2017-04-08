import {EventEmitter, Injectable} from '@angular/core';

@Injectable() // with this metadata I can use DI
export class CourseService {

    private courses: string[] = ['Angular 2', 'Java', 'PhoneGap'];

    emitterCreatedCourse = new EventEmitter<string>();

    static staticEmitterCreatedCourse = new EventEmitter<string>();

    constructor() {
        console.log('CourseService');
    }

    getCourses() {
        return this.courses;
    }

    addCourse(name: string) {
        this.courses.push(name);
        this.emitterCreatedCourse.emit(name);
        CourseService.staticEmitterCreatedCourse.emit(name);
    }

}