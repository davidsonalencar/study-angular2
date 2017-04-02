import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component'
import { CursosModule } from './cursos/cursos.module';

@NgModule({
    declarations: [
        AppComponent,
        MeuPrimeiroComponent,
        MeuPrimeiro2Component
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CursosModule
    ],
    // Onde coloca os services disponibilizados em todos os componentes
    // autenticacao, rotas...
    providers: [],
    // Componente que sera executados quando iniciar a aplicacao
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
