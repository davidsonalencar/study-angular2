import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MaterializeModule} from 'angular2-materialize';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { ImportLibComponent } from './import-lib/import-lib.component';

@NgModule({
    declarations: [
        AppComponent,
        CollapsibleComponent,
        ImportLibComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterializeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
