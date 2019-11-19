const express = require("express");
const path = require("path");
app = express();
const PORT = (process.env.PORT || 3000);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.use(express.static('app/public/'));
