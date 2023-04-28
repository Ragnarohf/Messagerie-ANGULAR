import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {EnTeteComponent} from "./en-tete/en-tete.component";
import {ListePersonneComponent} from "./liste-personne/liste-personne.component";
import {ListeMessageComponent} from "./liste-message/liste-message.component";
import {FormMessageComponent} from "./form-message/form-message.component";
import {CommonModule} from "@angular/common";
import { ReactiveFormsModule} from "@angular/forms";
import {MessageService} from "./services/message.service";
import {PersonneService} from "./services/personne.service";

@NgModule({
  declarations: [
    AppComponent,
    // Module06 - TP1 - Ajouter pour charger les 4 composants créés
    EnTeteComponent,
    ListePersonneComponent,
    ListeMessageComponent,
    FormMessageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    // Module06 - TP2 - Compléter pour gérer le formulaire
    ReactiveFormsModule,
  ],
  providers: [
    // Module06 - TP2 - Compléter pour gérer le formulaire
    MessageService,
    PersonneService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
