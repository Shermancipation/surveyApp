var mongoose = require("mongoose");
const path = require("path");

polls = require("./../controllers/polls.js");


// Routes
// Root Request
module.exports = function(app){

    app.get("/allPolls", function(req, res){
        console.log("Inside the express routing all polls method...")
        polls.getAllPolls(req, res);
    })

    app.post("/setSession", function(req, res){
        console.log("Inside the express routing set session method...");
        req.session.currentUserName = req.body.username;
        console.log(req.session.currentUserName);
        res.json(req.session.currentUserName);
    })

    app.get("/getSession", function(req, res){
        console.log("Inside the get session express routing method...");
        res.json(req.session.currentUserName);
    })

    app.get("/destroySession", function(req, res){
        console.log("Inside the destroy session express routing method...");
        req.session.destroy();
        res.json(true);
    })

    app.post("/newPoll", function(req,res){
        console.log("Inside the new poll express route: " + req.body);
        polls.addPoll(req,res);
    })

    app.post("/deletePoll", function(req,res){
        console.log("Inside the delete poll express route: " + req.body.pollId)
        polls.deletePoll(req,res);
    })

    app.post("/findCurrentPoll", function(req,res){
        console.log("Inside the find current poll express route: " + req.body.currentPollId)
        polls.getOnePoll(req,res);
    })

    app.post("/updateCurrentPoll", function(req,res){
        console.log("Inside the updated current poll express route...")
        polls.updateCurrentPoll(req,res);
    })

    app.all("*", (req,res,next)=>{
        res.sendfile(path.resolve("./public/dist/index.html"))
    });
 


}

