import {EventEmitter, Injectable} from '@angular/core';
import {Personne} from "../class/personne";
import {Message} from "../class/message";

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  personnes : Personne[] = [];
  public dataEmmit: EventEmitter<Personne[]> = new EventEmitter();


  constructor() {
    this.personnes.push(new Personne('1','Paul'));
    this.personnes.push(new Personne('2', 'Alain'));
  }

  public getPersonneUuid(uuid: string): Personne | null {
      let p = this.personnes.find(
          (value) => value.uuid.localeCompare(uuid) === 0
      );
      return (p !== undefined) ? p : null;
  }

  public getPersonnePseudo(pseudo: string): Personne | null {
    let p = this.personnes.find(
        (value) => value.pseudo.toLocaleLowerCase().localeCompare(pseudo.toLocaleLowerCase()) === 0
    );
    return (p !== undefined) ? p : null;
  }

  public addPersonne(personne : Personne) : void{
    this.personnes.push(personne);
    this.dataEmmit.emit(this.personnes.slice());
  }

  public guid() : string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

}
