const express = require("express");
const axios = require("axios");
require("dotenv").config();
const app = express();

const API_KEY = process.env.API_KEY;
const port = 3033;

/*app.get("/get/product" , function(req ,res){

})*/
app.get("/", function (req, res) {
    const address = req.query.address;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${API_KEY}`;

    axios
        .get(url)
        .then(function (response) {
            const data = response.data;
            const cityName = data.name;
            const temperature = data.main.temp;
            const sunsetTime = new Date(
                data.sys.sunset * 1000
            ).toLocaleTimeString();
            const message = `City Name: ${cityName}<br>Temperature: ${temperature} kelvin<br>Sunset Time: ${sunsetTime}`;

            res.send(
                `<html><body><div id='container'><hl>${message}</hl></div></body></html>`
            );
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Error occured");
        });
});

app.listen(port, function () {
    console.log(`Application is running on ${port}`);
});
/*
const promisevar = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript" });
        } else {
            reject("error : js went wrong");
        }
    }, 1000);
});

async function consumepromisefive() {
    try {
        const response = await promisevar;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
*/
