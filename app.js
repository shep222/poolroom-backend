require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 1007
const cors = require('cors');



const house = require('./routes/table')


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));

app.listen(PORT, function (){
    console.log("Poolroom is running on port:" + PORT);
})
