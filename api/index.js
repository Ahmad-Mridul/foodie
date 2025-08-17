const express = require("express");
var jwt = require("jsonwebtoken");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
        const usersCollection = client.db("foodieDB").collection("users");

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

        app.delete("/carts/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await cartCollection.deleteOne(query);
            res.send(result);
        });

        const verifyToken = async (req, res, next) => {
            console.log("inside veirfy, bearer: ", req.headers.authorization);
            const auth = await req.headers.authorization;
            if (!auth) {
                return res.status(401).send({ message: "Forbidden access" });
            }
            const token = auth.split(" ")[1];
            jwt.verify(
                token,
                process.env.ACCESS_TOKEN_SECRET,
                (err, decoded) => {
                    if (err) {
                        return res
                            .status(401)
                            .send({ message: "Forbidden access" });
                    }
                    req.decoded = decoded;
                    next();
                }
            );
        };

        // users api

        app.get("/users", verifyToken, async (req, res) => {
            console.log(req.headers);
            const result = await usersCollection.find().toArray();
            res.send(result);
        });

        app.patch("/users/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const { role } = req.body;
            const updateDoc = {
                $set: {
                    role: role,
                },
            };
            const result = await usersCollection.updateOne(query, updateDoc);
            res.send(result);
        });

        app.post("/users", async (req, res) => {
            const user = req.body;
            const email = user.email;
            const query = { email: email };
            const existingUser = await usersCollection.findOne(query);
            if (existingUser) {
                return res.send({ message: "user already exists" });
            }
            const result = await usersCollection.insertOne(user);
            res.send(result);
        });

        app.delete("/users/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await usersCollection.deleteOne(query);
            res.send(result);
        });

        // jwt api
        app.post("/jwt", async (req, res) => {
            const user = req.body;
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "1hr",
            });
            res.send({ token });
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
