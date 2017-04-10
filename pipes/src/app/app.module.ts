import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
