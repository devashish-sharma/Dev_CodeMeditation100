const express = require('express');
const https = require("https");
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.get("/", (req, res) => {
    const API_URL = process.env.API_URL;

    https.get(API_URL, (response) => {
        console.log(response.statusCode);
        response.on("data", (data) => {
            const JSONData = JSON.parse(data);
            console.log(JSONData);
            res.send(JSONData);
        })
    })
})

app.listen(3000, (req, res) => {
    console.log("Server is running on 3000 port");

})


//express is used to make routing with URL.
//dotenv is used to fetvh API_URL from .env file.
//https is used to access data from JSON file from any API.
