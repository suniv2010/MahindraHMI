import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginUserForm: FormGroup;
  userNameFormControl = "";
  passwordFormControl = "";

  ngOnInit(): void {}

  constructor(private fb: FormBuilder) {
    this.loginUserForm = fb.group({
      userNameFormControl: [null, Validators.required],
      passwordFormControl: [null, Validators.required]
    });
  }

  onFormSubmit(form) {
    console.log(form);
  }
}
