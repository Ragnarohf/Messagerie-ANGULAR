import {Component, OnInit} from '@angular/core';
import {Personne} from '../class/personne';
import {PersonneService} from "../services/personne.service";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-liste-personne',
  templateUrl: './liste-personne.component.html',
  styleUrls: ['./liste-personne.component.css']
})
export class ListePersonneComponent implements OnInit {
//Module06 - TP1 - Compléter pour gérer le formulaire
  public personnes: Array<Personne> = [];

  //Module06 - TP2 - Compléter pour gérer le formulaire
  constructor(private personneService: PersonneService, private messageService: MessageService) {
  }

  ngOnInit() {
    //this.initPersonnes();
    //Module06 - TP2 - injection des services
    this.personnes = this.personneService.personnes;
    this.personneService.dataEmmit.subscribe((pers) => this.personnes = pers);
  }

  //Module06 - TP1 - initialisation de 2 personnes
  initPersonnes(){
    this.personnes.push(new Personne('Paul'));
    this.personnes.push(new Personne('Alain'));
  }

  //Module06 - TP2 - recherche par identifiant
  searchMessage(uuid: string) {
    if (uuid.trim() !== '') {
      this.messageService.getMessagesByPersonne(uuid);
    }else{
      this.messageService.allMessages();
    }
  }
}
