const path = require("path");
const friendsData = require(path.join(__dirname, "./data/friends.js"));

module.exports= 

//
function (newFriend) {
    const newFriendScores = newFriend.scoresArray.map(function(index){
        //console.log(index);
        return parseInt(index);
    });
    console.log(newFriendScores); 
    //console.log("hi");
    //console.log(newFriend);
/*     const existingFriendsScoresArrays = [];
    friendsData.forEach(function(index){
        //console.log(index);
        const existingFriendScores = index.scores.map(function(element){
            parseInt(element);
            //console.log(element);
        });
        console.log(existingFriendScores);
        existingFriendsScoresArrays.push(existingFriendScores);
    }); */
    //console.log(existingFriendsScoresArrays);
}