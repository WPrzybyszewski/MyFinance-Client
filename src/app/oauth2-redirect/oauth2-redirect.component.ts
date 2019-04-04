import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-oauth2-redirect',
  templateUrl: './oauth2-redirect.component.html',
  styleUrls: ['./oauth2-redirect.component.css']
})
export class Oauth2RedirectComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) {
    console.log('construt');
  }

  ngOnInit() {
    console.log('ngInit');
    const queryParams = this.activeRoute.snapshot.queryParams;


    const token = queryParams['token'];

    localStorage.setItem('ACCESS_TOKEN', token);


    console.log('ngInit');
    console.log(queryParams);
  }

}
