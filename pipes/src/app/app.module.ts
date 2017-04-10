import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PipeExampleComponent} from './pipe-example/pipe-example.component';
import { CamelCasePipe } from './camel-case.pipe';

@NgModule({
    declarations: [
        AppComponent,
        PipeExampleComponent,
        CamelCasePipe
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
