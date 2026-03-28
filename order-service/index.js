const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

app.post("/order", async (req, res) => {
    try {
        const response = await axios.get("http://product-service:3002/products");

        res.json({
            message: "Order placed",
            products: response.data
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

app.listen(3003, "0.0.0.0", () => {
    console.log("Order Service running on port 3003");
});