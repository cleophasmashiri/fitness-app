import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
  }

  submit(form: NgForm) {
  //  this.authSvc.registerUser({
  //   username: form.value.email,
  //   password: form.value.password
  //  });
  }

}
