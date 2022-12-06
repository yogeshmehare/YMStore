//Connect to my atlas

const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Yogesh124:Yome124@cluster0.jlpyp.mongodb.net/YMStoreDB?retryWrites=true&w=majority";
const uri = "mongodb+srv://Yogesh124:Yome124@@cluster0.jlpyp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
      await client.connect();
      const database = client.db('YMStoreDB');
      const users = database.collection('Users');

      var mydoc = {
        name: { first: "Yogesh", last: "Mehare" },
        birth: new Date('Jun 23, 1912'),
        designation : "Developer"
     }

     users.insertOne(mydoc)

      const query = { designation: "Developer" };
      const user = await users.findOne(query);
      console.log(user);

    } finally {
      await client.close();
    }
  }

  run().catch(console.dir);


