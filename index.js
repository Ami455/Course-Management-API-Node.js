// const express = require("express");
// const app = express();
// const connection = require("./db/db.config");
// const bodyParser= require("body-parser");
// const port = 3500;
// const courseRoutes = require("./routes/course.route")

// app.use(express.json()); //parser
// app.use("/api/courses", courseRoutes);
// app.get("/", (req, res) => {
//     res.send("API is running");
//   });
  
// app.listen(port, async (error) => {
//     connection()
//         .then(() => { console.log(`MongoDB cennected successfully! port num ${port}`) }).
//         catch((error) => {
//             console.log("MongoDB connection failed ", error)
//         });

// })

const express = require("express");
const app = express();
const connection = require("./db/db.config");
const bodyParser = require("body-parser");
const courseRoutes = require("./routes/course.route");

const port = process.env.PORT || 3500;

app.use(express.json());
app.use("/api/courses", courseRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

connection()
  .then(() => {
    console.log(" MongoDB connected successfully!");

    // Start the server ONLY after DB is connected
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed:", error.message);
    process.exit(1); // Optional: stop app from running
  });
