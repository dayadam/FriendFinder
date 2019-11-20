const path = require("path");
const friendsData = require(path.join(__dirname, "../data/friends.js"));

module.exports = function (app) {

    app.post("/api/friends", function (req, res) {
        const newFriend = req.body;
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
        console.log(newFriend);
        friendsData.push(newFriend);
        res.json(newFriend);

    });

    app.get("/api/friends", function (req, res) {
        return res.json(friendsData)
    });

}
