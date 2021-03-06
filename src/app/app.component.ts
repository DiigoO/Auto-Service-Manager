import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Auto Services Manager';

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    const pageData = this.route.snapshot.data['page'];
  }
}
