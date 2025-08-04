const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const port = 3000;
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
        // await client.connect();
        const menuCollection = client.db("foodieDB").collection("menus");
        const reviewsCollection = client.db("foodieDB").collection("reviews");
        const cartCollection = client.db("foodieDB").collection("cart");

        // No "/api" here, Vercel adds it automatically
        app.get("/menus", async (req, res) => {
            const result = await menuCollection.find().toArray();
            res.send(result);
        });

        app.get("/reviews", async (req, res) => {
            const result = await reviewsCollection.find().toArray();
            res.send(result);
        });

        // cart post
        app.get("/carts", async (req, res) => {
            const email = req.query.email;
            console.log(email);
            const query = { email: email };
            let result = [];
            if (email) {
                result = await cartCollection.find(query).toArray();
            } else {
                result = await cartCollection.find().toArray();
            }
            res.send(result);
        });
        app.post("/carts", async (req, res) => {
            const cartItem = req.body;
            const result = await cartCollection.insertOne(cartItem);
            res.send(result);
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

app.listen(port, () => {
    console.log(`port: ${port}`);
});
