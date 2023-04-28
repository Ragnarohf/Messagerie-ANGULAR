import {Component, OnInit} from '@angular/core';
import {MessageService} from "../services/message.service";
import {PersonneService} from "../services/personne.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Message} from "../class/message";
import {Personne} from "../class/personne";

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.css']
})
export class FormMessageComponent implements OnInit {
  //Module06 - TP2 - Compléter pour gérer le formulaire
  angularForm: FormGroup;

  //Module06 - TP2 - Compléter pour gérer le formulaire - injection des services
  constructor(private messageService: MessageService, private personneService: PersonneService, private formBuilder: FormBuilder) {
    this.angularForm = this.formBuilder.group(
      {
        personne: ['', Validators.required],
        message: ['', Validators.required],
      }
    );
  }

  ngOnInit() {
  }

  //Module06 - TP2 - Compléter pour gérer le formulaire
  formValidation(): boolean {
    return this.angularForm.valid;
  }

  personneInvalide(): boolean{
    return this.angularForm.controls["personne"].invalid
      && (this.angularForm.controls["personne"].dirty || this.angularForm.controls["personne"].touched);
  }

  public messageInvalide(): boolean{
    return this.angularForm.controls['message'].invalid
      && (this.angularForm.controls["message"].dirty || this.angularForm.controls["message"].touched);
  }

  onEnregister() {
    if (this.formValidation()) {
      let inputPseudo = this.angularForm.get('personne');
      let pseudo = '';
      if(inputPseudo) {
        pseudo = inputPseudo.value;
      }
      let inputMessage = this.angularForm.get('message');
      let message = '';
      if(inputMessage){
        message = inputMessage.value;
      }
      let pers = this.personneService.getPersonnePseudo(pseudo);

      if (pers == null) {
        pers = new Personne(this.personneService.guid(), pseudo);
        this.personneService.addPersonne(pers);
      }

      this.messageService.addMessage(new Message(this.messageService.guid(), pers, message));
      this.angularForm.reset();
    }
  }

}
