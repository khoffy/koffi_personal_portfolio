import { Component } from '@angular/core';
import { Contact } from './contact.model';
import { NgForm } from '@angular/forms';
import { RestService } from './RestService';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {

  submitted = false;

  constructor(public contact: Contact, private restService: RestService) {
  }

  submitContact(form: NgForm) {
    if(form.valid) {
      this.submitted = true;
      if(form.valid) {
        console.log(this.contact);
        this.restService.saveMessage(this.contact).subscribe(
          (response) => {
            this.contact.clear();
            this.submitted = false;
        });
      }
    }
  }

}
