import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  IonBackButton,
  IonButton, IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonList,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Router} from "@angular/router";
import {AuthService} from "@services/auth/auth.service";

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.page.html',
  styleUrls: ['./disclaimer.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRow, IonCol, IonButton, IonList, ReactiveFormsModule, IonBackButton, IonButtons]
})
export class DisclaimerPage implements OnInit {

  disclaimerForm: FormGroup;
  playerForm: any;

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.disclaimerForm = this._formBuilder.group({
      accept: [false, [Validators.required]]
    })
  }

  ngOnInit() {
  }

  submit(): void {
    this.disclaimerForm.setValue({
      accept: true
    });
    if (this.disclaimerForm.valid) {
      // this.authService.createUser(this.playerForm)
      //   .subscribe((user: any) => {
      //       console.log('registered!!', user);
      //       this.router.navigateByUrl(`/tabs/profile`);
      //     }
      //   );
    }
  }
}
