const express = require("express");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.get("/", (request, response) => {
    return response.send("Server is Up!");
});

// Informations List
const items = [
    "Pelé Coffee", "Pilão Coffee",
    "Arabic Coffee", "Armenian Coffee"
];

app.get("/", (request, response) => {
    return response.status(200).json({ message: "Server Up!" });
});

app.get("/items", (request, response) => {
    return response.send(items.filter(Boolean));
});

app.get("/items/:id", (request, response) => {
    const id = request.params.id - 1;
    const item = items[id];

    return response.send(item);
});

app.post("/items", (request, response) => {
    const item = request.body.name;

    items.push(item);

    return response.send("Item created successfully!");
});

app.put("/items/:id", (request, response) => {
    const id = request.params.id - 1;
    const item = request.body.name;

    items[id] = item;

    return response.send("Item updated successfully!");
});

app.delete("/items/:id", (request, response) => {
    const id = request.params.id - 1;

    delete items[id];
});


module.exports = app;