const path = require("path");
const friendsData = require(path.join(__dirname, "../data/friends.js"));
const friendFinder = require(path.join(__dirname, "../server-side-logic.js"));

module.exports = function (app) {

    app.post("/api/friends", function (req, res) {
        const newFriend = req.body;
        const closestFriend = friendFinder(newFriend, friendsData);
        friendsData.push(newFriend);
        res.json(closestFriend);
    });

    app.get("/api/friends", function (req, res) {
        return res.json(friendsData)
    });

}

