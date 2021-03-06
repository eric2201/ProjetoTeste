import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HelloComponent} from './hello/hello.component';
import {BemVindoComponent} from './bem-vindo/bem-vindo.component';
import {FuncionarioCardComponent} from './funcionario-card/funcionario-card.component';
import {FuncionarioFormComponent} from './funcionario-form/funcionario-form.component';
import {CampoColoridoDirective} from './campo-colorido.directive';
import {NavegacaoModule} from './navegacao/navegacao.module';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BemVindoComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    CampoColoridoDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NavegacaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
