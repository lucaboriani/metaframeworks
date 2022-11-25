const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://zerodigi:t3ach1$fun77@cluster0.jfmeid4.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("todo-test").collection("myTodos");
  // perform actions on the collection object
  console.log(collection)
  client.close();
});