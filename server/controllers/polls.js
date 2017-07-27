var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Poll = mongoose.model("Poll");


module.exports = {

    addPoll: function(req, res){
            var poll = new Poll({
                creator: req.session.currentUserName,
                question: req.body.question,
                option1: req.body.option1,
                option1votes: 0,
                option2: req.body.option2,
                option2votes: 0,
                option3: req.body.option3,
                option3votes: 0,
                option4: req.body.option4,
                option4votes: 0,
            });
            poll.save().then((poll)=>{
                console.log("Successfully saved: " + poll);
                res.json(poll);
            }).catch((err)=>{
                res.status(500);
                console.log("Inside the .catch, errors found: " + err);
                res.json(err);
            })
    },

    getAllPolls: function(req, res){
        Poll.find()
            .exec((err, allpolls)=>{
                if(err)
                {
                    console.log("Error during Get All Polls express controller method..." + err);
                }
                else
                {
                console.log("All polls successfully retrieved!");
                res.json(allpolls)
                }})
    },

    getOnePoll: function(req, res){
        Poll.findOne({_id: req.body.currentPollId})
            .exec((err, poll)=>{
                if(err)
                {
                    console.log("Error during Get One Poll express controller method..." + err);
                }
                else
                {
                    console.log("Current Poll successfully retrieved!" + poll);
                    res.json(poll)
                }})
    },


    deletePoll: function(req, res){
        console.log("Inside delete poll method in Express Controller", req.body.pollId);
        Poll.remove({_id: req.body.pollId})
        .then(poll => {
            console.log(req.body.pollId + " succesfully deleted!");
            res.json(true);
        })
        .catch(err => {console.log("Errors during delete poll method " + err)}) 
    },

    updateCurrentPoll: function(req, res){
        console.log("Inside update current poll method in Express Controller");
        Poll.findOne({_id: req.body.pollId})
            .then((poll)=> {
                if(req.body.idx == 1)
                {
                    poll.option1votes += 1;
                }
                else if(req.body.idx == 2)
                {
                    poll.option2votes += 1;
                }
                else if(req.body.idx == 3)
                {
                    poll.option3votes += 1;
                }
                else if(req.body.idx == 4)
                {
                    poll.option4votes += 1;
                }
                poll.save()
            })
            .then(() =>{res.json(true)})
            .catch((err) => {"Errors during update current poll method " + err})
    },

}
