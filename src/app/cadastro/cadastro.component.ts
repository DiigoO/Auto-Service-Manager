import { Component, OnInit } from '@angular/core';
import { NewUser } from '../../aggregates/autoService-new-users';
import { LoginProvider } from '../../provider/login/login'; 

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  credentials : NewUser = new NewUser();

  constructor(private loginProvider : LoginProvider) { }

  ngOnInit() {
  }

  cadastrar(){
    console.log(this.credentials);
    debugger;
    var authenticated = this.loginProvider.createUser(this.credentials).subscribe(result=>(result));
    return false;
  }

}
