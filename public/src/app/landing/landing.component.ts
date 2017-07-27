import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  user = new User();
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() 
  {
    this.destroySession();
  }

  onSubmit()
  {
    this._httpService.setSession(this.user)
    .then((data) => {
      console.log("Current session username is " + data);
      this.router.navigate(['/dashboard'])
  })
    .catch((err) => {console.log("Errors during set session: " + err)})
  }

  destroySession()
  {
    this._httpService.destroySession()
      .then((data) => {console.log("Session successfully destroyed...")})
      .catch((err) => {console.log("Errors during session destroy" + err)})
  }



}
