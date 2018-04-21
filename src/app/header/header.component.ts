import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    // console.log(this.router.url);
    // if (this.router.url.indexOf('cadastro') > -1) {
    //   console.log("cadastro");
    //   document.getElementById("login").style.display = "";
    //   document.getElementById("signup").style.display = "none";
    //   document.getElementById("logout").style.display = "none";
    // }
    // else if(this.router.url.indexOf('home') > -1) {
    //   console.log("home");
    //   document.getElementById("login").style.display = "none";
    //   document.getElementById("signup").style.display = "";
    //   document.getElementById("logout").style.display = "none";
    // }
    // else {
    //   console.log("nem um nem outro");
    //   document.getElementById("login").style.display = "none";
    //   document.getElementById("signup").style.display = "none";
    //   document.getElementById("logout").style.display = "";
    // }
  }

}
