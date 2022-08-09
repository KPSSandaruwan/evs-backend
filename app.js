const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require("dotenv").config();
const app = express();
app.use(express.json());

mongoose.Promise = global.Promise;

// mongoose.connect(process.env.DATABASE,{
//     useCreatendex: true, 
//     useFindAndModify: false, 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 
// }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database', error)
//     }
// });


main().catch(err => console.log("err", err));

async function main() {
  await mongoose.connect(process.env.DATABASE);
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/",(req,res) => {
    res.send("welcome to API")
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listning to port ${port}`));