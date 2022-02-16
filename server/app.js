const express = require('express')
const bodyParser = require("body-parser");
const app = express();
const port = 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const db =require("./models")
db.sequelize.sync();

app.get('/', (req, res)=> res.send("linked with api"));
require("./routes/user")(app);
app.listen(port, () => console.log(`Listening on port ${port}!`))