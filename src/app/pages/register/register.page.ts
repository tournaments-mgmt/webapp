import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonNav} from '@ionic/angular/standalone';
import {RegistrationFormPage} from "@pages/register/registration-form/registration-form.page";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonNav]
})
export class RegisterPage {
  registrationFormPage = RegistrationFormPage;

  constructor() {
  }

}
