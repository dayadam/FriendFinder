const path = require("path");
const friendsData = require(path.join(__dirname, "./data/friends.js"));
Array.min = function( array ){
    return Math.min.apply( Math, array );
};

module.exports = function (newFriend, friendsData) {
    createExistingFriendsScoresArrays(friendsData, createNewFriendScoresArray(newFriend));
}

/* function createExistingFriendsScoresArrays(friendsData) {
    const existingFriendsScoresArrays = [];
    friendsData.forEach(function (index) {
        //console.log(index);
        const existingFriendScores = index.scores.map(function (element) {
            return Math.abs(parseInt(element));
            //console.log(element);
        });
        //console.log(existingFriendScores);
        existingFriendsScoresArrays.push(existingFriendScores);
    });
    return console.log(existingFriendsScoresArrays);
}; */

function createNewFriendScoresArray(newFriend) {
    const newFriendScoresArray = newFriend.scoresArray.map(function (index) {
        return parseInt(index);
    });
    return newFriendScoresArray;
};

/* function compareNFArrayToEFArrays(eFSArrays, nFSArray) {
    const comparedArrays = [];
    eFSArrays.forEach(function (index) {
        //console.log(index);
        const existingFriendScores = index.scores.map(function (element) {
            return parseInt(element);
            //console.log(element);
        });
        //console.log(existingFriendScores);
        existingFriendsScoresArrays.push(existingFriendScores);
    });
    return console.log(existingFriendsScoresArrays);

} */

/* function createExistingFriendsScoresArrays(friendsData, newFriendScoresArray) {
    const existingFriendsScoresArrays = [];
    //console.log(newFriendScoresArray);
    friendsData.forEach(function (index) {
        //console.log(index);
        //console.log(index.scores);
        const existingFriendScores = [];
        let totalDifference = 0;
        for (i=0; i< index.scores.length; i++) {
            existingFriendScores.push(Math.abs(parseInt(index.scores[i]) - newFriendScoresArray[i]));
            totalDifference += Math.abs(parseInt(index.scores[i]) - newFriendScoresArray[i]);
        }
        //existingFriendsScoresArrays.push(existingFriendScores);
        existingFriendsScoresArrays.push(totalDifference);
    });
    return console.log(existingFriendsScoresArrays);
}; */



function createExistingFriendsScoresArrays(friendsData, newFriendScoresArray) {
    const existingFriendsScoresArrays = [];
    friendsData.forEach(function (index) {
        let totalDifference = 0;
        for (i=0; i< index.scores.length; i++) {
            totalDifference += Math.abs(parseInt(index.scores[i]) - newFriendScoresArray[i]);
        }
        existingFriendsScoresArrays.push(totalDifference);
    });
    console.log(Array.min(existingFriendsScoresArrays));
    console.log(existingFriendsScoresArrays.indexOf(Array.min(existingFriendsScoresArrays)));
    const indexOfLowestDifference = existingFriendsScoresArrays.indexOf(Array.min(existingFriendsScoresArrays));
    console.log(friendsData[indexOfLowestDifference].name);
    return console.log(existingFriendsScoresArrays);
};