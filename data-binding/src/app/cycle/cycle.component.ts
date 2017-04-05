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
        CycleComponent.log('constructor');
    }

    ngOnInit() {
        CycleComponent.log('ngOnInit');
        console.log(this.variavelLocalP); //se não usar o ViewChild não enxergará o elemento pela variável
    }

    ngOnChanges() {
        CycleComponent.log('ngOnChanges');
        console.log(this.variavelLocalP);
    }

    ngDoCheck() {
        CycleComponent.log('ngDoCheck');
    }

    ngAfterContentInit() {
        CycleComponent.log('ngAfterContentInit');
    }

    ngAfterContentChecked() {
        CycleComponent.log('ngAfterContentChecked');
        console.log(this.variavelLocalP);
    }

    ngAfterViewInit() {
        CycleComponent.log('ngAfterViewInit');
    }

    ngAfterViewChecked() {
        CycleComponent.log('ngAfterViewChecked');
        console.log(this.variavelLocalP);
    }

    ngOnDestroy() {
        CycleComponent.log('ngOnDestroy');
    }

    private static log(hook: string) {
        console.log(hook);
    }

}
