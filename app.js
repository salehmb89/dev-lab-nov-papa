const express = require('express')
const app = express()
const port = process.env.PORT || 5500;
// set the view engine to ejs
let path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use res.render to load up an ejs view file

let myTypeServer = "9️⃣ The Peacemaker ✌🏻";

app.get('/', function(req, res) {

  res.render('index', {
   
    myTypeClient: myTypeServer 

  });
  
});


app.get('/send', function (req, res) {
  
  res.send('<p style="font-size: 18px;">Hello World from Express "ياهلا ورحبا" <br><a href="/" style="font-size: 18px;">home</a></p>');

})



app.listen(port, () => {
  console.log(`nov app listening on port ${port}`)
})