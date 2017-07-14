// server.js
  // SERVER-SIDE JAVASCRIPT
  var express = require('express');
  var app = express();


  // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  app.use(express.static('public'));

    app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  //Some data on the SERVER-SIDE

  var disneyFam =[
    {name: 'Mickey'},
    {name: "Minnie"},
    {name: 'Stitch'},
    {name: 'Lilo'},
    {name: 'Donald'}
  ];

//Albums
  var albums = [
     {
       title: 'Cupid Deluxe',
       artist: 'Blood Orange'
     },
     {
       title: 'M3LL155X - EP',
       artist: 'FKA twigs'
     },
     {
       title: 'Fake History',
       artist: 'letlive.'
     }
   ];

  // Routes
  app.get('/', function(req, res) {
    //res.send('Hello World!');
    res.sendFile('views/index.html', { root : __dirname});
    console.log(__dirname);
  });

  app.get('/api/albums', function(req,res){
    res.json(albums);
  });

  app.get('/api/disneyFam', function (req, res) {
    res.json(disneyFam);
    //console.log(disneyFam);
  });


//process.env.PORT || 3000 means "in production use the production port, otherwise use 3000 (for development)".
  app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening at http://localhost:3000/');
  });
