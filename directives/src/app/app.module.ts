import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {DirectiveNgifComponent} from './directive-ngif/directive-ngif.component';
import {MyTestComponent} from './my-test/my-test.component';
import {DirectiveNgswitchComponent} from './directive-ngswitch/directive-ngswitch.component';
import { DirectiveNgforComponent } from './directive-ngfor/directive-ngfor.component';
import { DirectiveNgclassComponent } from './directive-ngclass/directive-ngclass.component';
import { DirectiveNgstyleComponent } from './directive-ngstyle/directive-ngstyle.component';

@NgModule({
    declarations: [
        AppComponent,
        DirectiveNgifComponent,
        MyTestComponent,
        DirectiveNgswitchComponent,
        DirectiveNgforComponent,
        DirectiveNgclassComponent,
        DirectiveNgstyleComponent
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
