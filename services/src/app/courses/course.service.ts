import {EventEmitter, Injectable} from '@angular/core';
import {LogService} from '../logger/log.service';

@Injectable() // with this metadata I can use DI
export class CourseService {

    private courses: string[] = ['Angular 2', 'Java', 'PhoneGap'];

    emitterCreatedCourse = new EventEmitter<string>();

    static staticEmitterCreatedCourse = new EventEmitter<string>();

    constructor(
        private logService: LogService
    ) {
        console.log('CourseService');
    }

    getCourses() {
        this.logService.consoleLog('Obtendo lista de curso...');
        return this.courses;
    }

    addCourse(name: string) {
        this.logService.consoleLog(`Criando um novo curso: ${name}`);
        this.courses.push(name);
        this.emitterCreatedCourse.emit(name);
        CourseService.staticEmitterCreatedCourse.emit(name);
    }

}