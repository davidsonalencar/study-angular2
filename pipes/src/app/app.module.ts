import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PipeExampleComponent} from './pipe-example/pipe-example.component';
import {CamelCasePipe} from './camel-case.pipe';
import {PipePureComponent} from './pipe-pure/pipe-pure.component';
import {FilterArrayPipe} from './pipe-pure/filter-array.pipe';
import {PipeImpureComponent} from './pipe-impure/pipe-impure.component';
import { FilterArrayImpurePipe } from './pipe-impure/filter-array-impure.pipe';
import { PipeAsyncComponent } from './pipe-async/pipe-async.component';

@NgModule({
    declarations: [
        AppComponent,
        PipeExampleComponent,
        CamelCasePipe,
        PipePureComponent,
        FilterArrayPipe,
        PipeImpureComponent,
        FilterArrayImpurePipe,
        PipeAsyncComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    // providers: [
    //     {
    //         provide: LOCALE_ID,
    //         useValue: 'pt-BR'
    //     }
    // ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
