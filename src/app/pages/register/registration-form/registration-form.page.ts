import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonNav,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {DisclaimerPage} from "@pages/register/disclaimer/disclaimer.page";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.page.html',
  styleUrls: ['./registration-form.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonInput, IonIcon, IonRow, IonCol, IonButton, IonList, ReactiveFormsModule]
})
export class RegistrationFormPage implements OnInit {
  public disclaimerFormComponent: any;
  playerForm: FormGroup;

  constructor(public _formBuilder: FormBuilder, private _nav: IonNav) {
    this.disclaimerFormComponent = DisclaimerPage
    this.playerForm = this._formBuilder.group({
      nickname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(2), Validators.email]],
      age: ['', [Validators.required, Validators.minLength(1)]]
    })
  }

  ngOnInit() {
  }

  submitForm() {
    if (this.playerForm.valid) {
      this._nav.push(this.disclaimerFormComponent, {playerForm: this.playerForm.value}).then();
    }
  }
}
