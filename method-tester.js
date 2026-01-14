const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is the first page of the website");
})

app.post("/products", (req, res) => {
    res.json({
        message: "The product has been added successfully.",
        data: req.body
    });
})

app.put("/update-products", (req, res) => {
    res.send("The product has been updated successfully.");
})

app.delete("/delete-products", (req, res) => {
    res.send("Product deleted successfully.");
})

app.listen("5000", () => {
    console.log("The server running on port 5000.");
})