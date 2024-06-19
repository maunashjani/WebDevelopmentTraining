const express = require("express");
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// Connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'studentsdb';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

async function connectToDatabase() {
 const client = new MongoClient(url);
 
 try {
    await client.connect();
    console.log("Connected");

    const db = client.db(dbName);

    app.get("/read", async (req, res) => {
        await readDocuments(db, res);
    });
 }
 catch(err) {
    console.log(err);
 }
 finally {
    await client.close();
    console.log("Disconnected");
 }
}

async function readDocuments(db, res) {
    const collection = db.collection('students');

    const documents = await collection.find().toArray();

    res.json(documents);
}

connectToDatabase();

app.listen(port, ()=> {
    console.log("server running");
})
