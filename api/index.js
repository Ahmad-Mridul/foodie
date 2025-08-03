const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.me22h6h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        await client.connect();
        const menuCollection = client.db("foodieDB").collection("menus");

        // No "/api" here, Vercel adds it automatically
        app.get("/menus", async (req, res) => {
            const result = await menuCollection.find().toArray();
            res.json(result);
        });

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}
run();

// Root route (for testing)
app.get("/", (req, res) => {
    res.send("Connected");
});

// Export for Vercel
module.exports = app;
module.exports.handler = serverless(app);
