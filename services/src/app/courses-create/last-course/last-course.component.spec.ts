import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LastCourseComponent} from './last-course.component';

describe('LastCourseComponent', () => {
    let component: LastCourseComponent;
    let fixture: ComponentFixture<LastCourseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LastCourseComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LastCourseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
