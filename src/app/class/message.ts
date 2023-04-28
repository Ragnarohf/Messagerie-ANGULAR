import {Personne} from './personne';
//Module06 - TP1 - Création BO
export class Message {
    personne: Personne;
    message: string;
    date: Date;
    //Module06 - TP2 - Ajout d'un identifiant
    uuid : string;

    //Module06 - TP1 - rendre optionnel les paramètres du constructeur afin de l'appeler sans paramètre
    //Module06 - TP2 - Ajout d'un identifiant
    constructor(uuid : string, personne: Personne, message: string = '') {
       this.personne = personne;
       this.message = message;
       this.date = new Date();
       this.uuid = uuid;
    }

    public static createMessage(uuid : string, personne: Personne, message: string, dateMessage: Date): Message {
        const m: Message = new Message(uuid, personne, message);
        m.date = dateMessage;
        return  m;
    }

}
