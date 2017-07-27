import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from "../http.service";

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  currentPollId;
  currentPoll;
  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private router: Router) { 
    this._route.params.subscribe((param)=>{
      console.log("Activated Route firing, current Poll ID is: ", param);
      this.currentPollId = param;
    })
  }

  ngOnInit() {
    this.findCurrentPoll(this.currentPollId);
  }

  findCurrentPoll(currentPollId)
  {
    this._httpService.findCurrentPoll(currentPollId)
    .then((poll) => {
      this.currentPoll = poll;
    })
    .catch((err) => {console.log(err)})  
  }

  voteUp(pollId, idx)
  {
    this._httpService.updateCurrentPoll(pollId, idx)
      .then((poll) => {
        console.log("Updated current poll successfully!");
        this.findCurrentPoll(this.currentPollId);
    })
      .catch((err) => {console.log("Errors during update current poll method: " + err)})
  }

}
