require("dotenv").config(); 
const express = require("express"); //import
const {connectToMongoDB} = require("./database"); //import database
const app = express(); //instance of express called app
app.use(express.json());

const router = require("./routes"); //import todos router
app.use("/api", router); //prefix /api to endpoints

//port
const port = process.env.PORT || 5000;

//server
const startServer = async () => {
    await connectToMongoDB();
    app.listen(port, () => {
        console.log(`Server is listening on http://localhost:${port}`);
    });
};

startServer();
