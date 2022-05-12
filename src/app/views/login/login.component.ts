import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private loginservice : LoginService , private router:Router, private FormBuilder: FormBuilder) {
    this.loginForm = this.FormBuilder.group({
      email: ['email@email', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  ngOnInit(): void {
  }

  loginModel = new User()
  mensagem =""

onSubmit(){
  console.log(this.loginModel)

 this.loginservice.login(this.loginModel).subscribe((response) => {
   this.router.navigateByUrl("") 
 }, (respostaErro) => {
   this.mensagem = respostaErro.error
   console.log(this.mensagem)
 
 })
}
}
