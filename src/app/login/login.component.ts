import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from '../../aggregates/login-credentials';
import { LoginProvider } from '../../provider/login/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials : LoginCredentials = new LoginCredentials();

  constructor(private loginProvider : LoginProvider) { }

  ngOnInit() {
  }

  login(){
    console.log(this.credentials);
    debugger;
    this.loginProvider.login(this.credentials).subscribe(result=>(result));
    return false;
  }

}
