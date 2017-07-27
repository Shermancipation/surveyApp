import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs";


@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  setSession(user)
  {
    return this._http.post("/setSession", user).map(data => data.json()).toPromise();
  }

  getSession()
  {
    return this._http.get("/getSession").map(data => data.json()).toPromise();
  }

  destroySession()
  {
    return this._http.get("/destroySession").map(data => data.json()).toPromise();
  }

  newPoll(poll)
  {
    return this._http.post("/newPoll", poll).map(data => data.json()).toPromise();
  }

  getAllPolls()
  {
    return this._http.get("/allPolls").map(data => data.json()).toPromise();
  }

  deletePoll(pollId)
  {
    return this._http.post("/deletePoll", {pollId: pollId}).map(data => data.json()).toPromise();
  }

  findCurrentPoll(currentPollId)
  {
    return this._http.post("/findCurrentPoll", {currentPollId: currentPollId.id}).map(data => data.json()).toPromise();
  }

  updateCurrentPoll(pollId, idx)
  {
    return this._http.post("/updateCurrentPoll", {pollId: pollId, idx: idx}).map(data => data.json()).toPromise();
  }

}
