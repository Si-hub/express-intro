const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');

let express = require('express'); //this is a top-level function exported by the express module
let app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'})); //registering the template engine express-handlebars as handlebars
app.set('view engine', 'handlebars');

// GET method route and "/" -route path
// This route path will match requests to the home route. 
app.get('/', function (req, res) { // Routes HTTP GET requests to the specified path with the specified functions
  res.render('home');// send the rendered view to the client (which is what is inside this home.handlebars file)
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(express.static('public')); //built-in static middleware will make server instance to find css, js files 
                                  // and other resources stored in the public folder
// GET method route also
app.get("/", function(req, res){ //respond with "Sim's WebApp" when a GET request is made to the homepage
  res.send("Sim's WebApp");// respond or sending the data out of the server to the client 
});

let PORT = process.env.PORT || 3007;  //telling the server what port to listen on

app.listen(PORT, function(){
  console.log('App starting on port', PORT); // when a server listen it uses port number: 3007
                                            // so this method binds and listens for connections on the specified host and port 

});