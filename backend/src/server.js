import express from "express";
import dotenv from "dotenv";

const app = express();


dotenv.config();


const PORT = process.env.PORT || 3000;

app.get("/api/login", (req, res) => {
    res.send("Login Endpoint")
})

app.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
});
