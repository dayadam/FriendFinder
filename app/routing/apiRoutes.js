module.exports = function (app) {

    app.post("/api/friends", function (req, res) {
        console.log(req.body);
        res.send(req.body);
    });

}
