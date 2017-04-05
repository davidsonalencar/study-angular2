import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {DirectiveNgifComponent} from './directive-ngif/directive-ngif.component';
import { MyTestComponent } from './my-test/my-test.component';

@NgModule({
    declarations: [
        AppComponent,
        DirectiveNgifComponent,
        MyTestComponent
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
