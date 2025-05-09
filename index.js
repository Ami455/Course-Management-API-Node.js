const express = require("express");
const app = express();
const connection = require("./db/db.config");
const bodyParser= require("body-parser");
const port = 3500;
const courseRoutes = require("./routes/course.route")

app.use(express.json()); //parser
app.use("/api/courses", courseRoutes);
app.get("/", (req, res) => {
    res.send("API is running");
  });
  
app.listen(port, async (error) => {
    connection()
        .then(() => { console.log(`MongoDB cennected successfully! port num ${port}`) }).
        catch((error) => {
            console.log("MongoDB connection failed ", error)
        });

})