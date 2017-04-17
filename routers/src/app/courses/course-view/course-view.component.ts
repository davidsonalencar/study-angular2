import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-course-view',
    templateUrl: './course-view.component.html',
    styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit, OnDestroy {

    id: string;
    subscription: Subscription;

    constructor(
        private route: ActivatedRoute
    ) {
        // this.id = this.route.snapshot.params['id'];
        // console.log(this.route)
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
            (params: any) => {
                this.id = params['id'];
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
