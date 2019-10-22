const app = require('express')
const app = require('body-parser')

app.get("/", (req, res) => {
    res.send("Hello from Node.js app \n");
});

app.listen('7080', () => {
    console.log("Api-gateway sucks!")
})
