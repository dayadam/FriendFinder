const path = require("path");
const friendsData = require(path.join(__dirname, "./data/friends.js"));
Array.min = function( array ){
    return Math.min.apply( Math, array );
};

module.exports = function (newFriend, friendsData) {
    return (createExistingFriendsScoresArrays(friendsData, createNewFriendScoresArray(newFriend)));
};

function createNewFriendScoresArray(newFriend) {
    const newFriendScoresArray = newFriend.scores.map(function (index) {
        return parseInt(index);
    });
    return newFriendScoresArray;
};

function createExistingFriendsScoresArrays(friendsData, newFriendScoresArray) {
    const existingFriendsScoresArrays = [];
    friendsData.forEach(function (index) {
        console.log(index);
        let totalDifference = 0;
        for (i=0; i< index.scores.length; i++) {
            totalDifference += Math.abs(parseInt(index.scores[i]) - newFriendScoresArray[i]);
        }
        existingFriendsScoresArrays.push(totalDifference);
    });
    const indexOfLowestDifference = existingFriendsScoresArrays.indexOf(Array.min(existingFriendsScoresArrays));
    return friendsData[indexOfLowestDifference].name;
};