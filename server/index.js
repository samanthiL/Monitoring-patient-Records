const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3001;
app.use(cors());

app.listen(port,()=>{
    console.log("server is running")
});


app.get("/getAPI",(req,res) =>{
res.send("<h1>Hellosffd </h1>")
});

app.get("/users", (req, res) => {
    const filePath = path.join(__dirname, "appointment.json");

    // Read the JSON file
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            res.status(500).json({ error: "Failed to read data" });
            return;
        }

        // Parse the JSON data and send as response
        res.json(JSON.parse(data));
    });
});

