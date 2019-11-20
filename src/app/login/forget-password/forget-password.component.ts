import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  forgetUserForm: FormGroup;
  userNameFormControl = "";

  ngOnInit(): void { }

  constructor(private fb: FormBuilder) {
    this.forgetUserForm = fb.group({
      userNameFormControl: [null, Validators.required]
    });
  }

  onFormSubmit(form) {
    console.log(form);
  }

}
