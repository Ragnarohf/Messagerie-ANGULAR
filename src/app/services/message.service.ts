import {EventEmitter, Injectable} from '@angular/core';
import {Message} from "../class/message";
import {Personne} from "../class/personne";
import {PersonneService} from "./personne.service";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: Array<Message> = [];
  public dataTrier: EventEmitter<Message[]> = new EventEmitter();


  constructor(private personneService: PersonneService) {
    this.messages.push(Message.createMessage('1', <Personne>personneService.getPersonneUuid('1'), 'message 1 test', new Date('2018-10-22T06:24:00')));
    this.messages.push(Message.createMessage('2', <Personne>personneService.getPersonneUuid('2'), 'message 2 test', new Date('2019-06-22T12:29:00')));
    this.messages.push(Message.createMessage('3', <Personne>personneService.getPersonneUuid('1'), 'message 3 test', new Date('2018-09-03T21:11:00')));
    this.trierMessage();
  }

  public addMessage(message: Message) {
    if (message != null) {
      this.messages.push(message);
      this.trierMessage();
      this.dataTrier.emit(this.messages.slice());
    }
  }

  allMessages() {
    this.trierMessage();
    this.dataTrier.emit(this.messages.slice());
  }

  trierMessage() {
    this.messages.sort((m1, m2) => m2.date.getTime() - m1.date.getTime());
  }

  public getMessage(uuid: string): Message | null {
    let m = this.messages.find(
      (value) => value.uuid.localeCompare(uuid) === 0
    );

    return (m !== undefined) ? m : null;
  }

  public getMessagesByPersonne(uuidPersonne: string) {
    let m = this.messages.filter(
      (value) => value.personne.uuid.localeCompare(uuidPersonne) === 0
    );
    this.dataTrier.emit(m.slice());
  }

  public guid(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
}
