const express = require("express"); //import express
const app = express(); //instance of express called app
const router = require("./routes"); //import todos router

// prefix /api to endpoints
app.use("/api", router);

//listen to server on localhost
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})