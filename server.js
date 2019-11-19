const express = require("express");
const path = require("path");
app = express();
const PORT = (process.env.PORT || 3000);
//const apiRoutes = require('./app/routing/apiRoutes.js');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public/'));
require("./app/routing/apiRoutes.js")(app);
//app.use('/api', apiRoutes.friends);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
