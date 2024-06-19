const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

// Connection URL and database name
const url = 'mongodb://localhost:27017/';
const dbName = 'studentsdb';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Function to connect to the MongoDB server
async function connectToDatabase() {
  const client = new MongoClient(url);

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to the database');

    // Access the specified database
    const db = client.db(dbName);

    // Routes for CRUD operations
    app.get('/read', async (req, res) => {
      await readDocuments(db, res);
    });
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Close the connection
    await client.close();
    console.log('Disconnected from the database');
  }
}

// Function to read documents
async function readDocuments(db, res) {
  const collection = db.collection('students');

  // Find all documents in the collection
  const documents = await collection.find().toArray();

  res.json(documents);
}

// Call the connectToDatabase function
connectToDatabase();

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

