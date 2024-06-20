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

    app.post('/create', async (req, res) => {
      console.log("in create API");
      await createDocuments(db, req, res);
    });

    app.put('/update', async (req, res) => {
      await updateDocuments(db, req, res);
    });
  } catch (err) {
    console.error('Error:', err);
  }
}

// Function to read documents
async function readDocuments(db, res) {
  const collection = db.collection('students');

  // Find all documents in the collection
  const documents = await collection.find().toArray();

  res.json(documents);
}

// Function to create documents
async function createDocuments(db, req, res) {
  const collection = db.collection('students');
  
  const { name, rollno, marks }= req.body;

  const newStudent = {name, rollno, marks};

  const result = await collection.insertOne(newStudent);

  res.json({
    message: "document created",
    id: result.insertedId
  });
}

// Function to update documents
async function updateDocuments(db, req, res) {
  const collection = db.collection('students');
  
  const { name, rollno, marks} = req.body;

  const filter = {rollno: rollno};

  const updateStudent = {
    $set: {
      name,
      marks
    }
  };

  const result = await collection.updateOne(filter, updateStudent);
  
  res.json({
    message: "document updated",
    count: result.modifiedCount
  });
}

// Call the connectToDatabase function
connectToDatabase();

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

