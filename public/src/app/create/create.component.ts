import { Component, OnInit } from '@angular/core';
import { Poll } from "../poll";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  poll = new Poll()
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() 
  {
  }

  newPoll()
  {
    this._httpService.newPoll(this.poll)
    .then((poll) => {
      console.log("Then promise on newPoll method firing...");
      this.router.navigate(['/dashboard']);
    })
    .catch((err) => {console.log("Errors during newPoll method: " + err)})
  }

}
