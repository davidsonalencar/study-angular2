import {
    Component, OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
    OnDestroy, Input, ViewChild, DoCheck
} from '@angular/core';

@Component({
    selector: 'app-cycle',
    templateUrl: './cycle.component.html',
    styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
    AfterViewChecked, OnDestroy {

    @Input() valorInicial: number = 10;

    @ViewChild('variavelLocalP') variavelLocalP: HTMLElement;

    constructor() {
        this.log('constructor');
    }

    ngOnInit() {
        this.log('ngOnInit');
        console.log(this.variavelLocalP); //se não usar o ViewChild não enxergará o elemento pela variável
    }

    ngOnChanges() {
        this.log('ngOnChanges');
        console.log(this.variavelLocalP);
    }

    ngDoCheck() {
        this.log('ngDoCheck');
    }

    ngAfterContentInit() {
        this.log('ngAfterContentInit');
    }

    ngAfterContentChecked() {
        this.log('ngAfterContentChecked');
        console.log(this.variavelLocalP);
    }

    ngAfterViewInit() {
        this.log('ngAfterViewInit');
    }

    ngAfterViewChecked() {
        this.log('ngAfterViewChecked');
        console.log(this.variavelLocalP);
    }

    ngOnDestroy() {
        this.log('ngOnDestroy');
    }

    private log(hook: string) {
        console.log(hook);
    }

}
