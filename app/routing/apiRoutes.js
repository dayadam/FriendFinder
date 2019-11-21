const path = require("path");
const friendsData = require(path.join(__dirname, "../data/friends.js"));
const friendFinder = require(path.join(__dirname, "../server-side-logic.js"));

module.exports = function (app) {

    app.post("/api/friends", function (req, res) {
        const newFriend = req.body;
        //console.log(newFriend); 
        const closestFriend = {name: friendFinder(newFriend, friendsData)};
        console.log(closestFriend);
        friendsData.push(newFriend);
        res.json(closestFriend);
        //console.log(friendsData);
    });

    app.get("/api/friends", function (req, res) {
        return res.json(friendsData)
    });

}

