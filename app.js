const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sbasalim:<password>@cluster0.h1oabai.mongodb.net/?retryWrites=true&w=majority";

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

4
let myVariableServer = 'soft coded server data';

app.get('/view', function (req, res) {
  res.render('index', 
  {
    'myVariableClient' : myVariableServer 
  }
  );
})

app.post('/postClientData', function (req, res) {
  
   console.log("body: ", req.body)
   console.log("user Name: ", req.body.userName)
  //  console.log("params: ", req.params['userName']);
  
  // myVariableServer = req.body.userName;

  res.render('index', 
  {
    'myVariableClient' : req.body.userName 
  }
  );
})


app.get('/', function (req, res) {
  res.send('<h1>Hello World From Express & a PaaS/Render "ياهلا ومرحبا"</h1>')
})

app.get('/index', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})



// app.listen(3000)

app.listen(port, () => console.log(`Server is running...on ${ port }` ));


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env,uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
