//Module06 - TP1 - Création BO
export class Personne {
  pseudo: string;
  //Module06 - TP2 - ajout d'un identifiant
  uuid: string;

  //valeur par défaut dans pseudo à vide
  //Module06 - TP2 - ajout d'un identifiant
  constructor(uuid: string, pseudo: string = '') {
    this.pseudo = pseudo;
    this.uuid = uuid;
  }
}
