const express = require("express");
const app = express();
const connection = require("./db/db.config");
const port = 3500;
const courseRoutes = require("./routes/course.route")

app.use(express.json()); //parser
app.use("/api/courses", courseRoutes);
app.get("/", (req, res) => {
    res.send("API is running");
});


connection()
    .then(() => {
        console.log(`MongoDB cennected successfully! port num ${port}`)
        // Start the server ONLY after DB is connected
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }).catch((error) => {
        console.log("MongoDB connection failed ", error);
        process.exit(1); // Optional: stop app from running
    });
