import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserI } from 'src/app/shared/models/user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc:AuthService,
              private route:Router) { }

  loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  })

  ngOnInit(): void {
    /* const user: UserI = {
      email: 'neyder@gmail.com',
      password: 'neyder0'
    };
    this.authSvc.loginByEmail(user); */
  }

  onLogin(form:UserI){
    //console.log('form: ',form);
    this.authSvc.loginByEmail(form)
    .then(res =>{
      console.log('exitoso',res);
      this.route.navigate(['/'])
    }).catch(err=> console.log('error',err));
  }
}
