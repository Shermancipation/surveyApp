import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allPolls = [];
  currentUserName = "";
  search_text;
  constructor(private _httpService: HttpService, private router: Router) {
    this.search_text = "";
   }

  ngOnInit() {
    this.findAllPolls();
    this.getSession();
  }

  findAllPolls()
  {
    this._httpService.getAllPolls()
      .then((polls) => {this.allPolls = polls})
      .catch((err) => {console.log(err)})
  }

  getSession()
  {
    this._httpService.getSession()
      .then((data) => {this.currentUserName = data})
      .catch((err) => {console.log("Errors during get session method: " + err)})
  }

  deletePoll(pollId)
  {
    this._httpService.deletePoll(pollId)
      .then((data) => {
        console.log("Poll Id " + pollId + "successfully deleted!");
        this.findAllPolls();
    })
      .catch((err) => {console.log("Errors during delete poll method: " + err)})
  }






}
