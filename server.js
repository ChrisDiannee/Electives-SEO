//server.js
//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public/')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'view/index.html'));
});
app.get('/index.html', function(req, res){
  res.sendFile(path.join(__dirname, 'view/index.html'));
});
app.get('/SEO.html', function(req, res){
  res.sendFile(path.join(__dirname, 'view/SEO.html'));
});
app.get('/DifferenceBetweenSEOandSEM.html', function(req, res){
  res.sendFile(path.join(__dirname, 'view/DifferenceBetweenSEOandSEM.html'));
});
app.get('/DifferencebetweenONPAGEandOFFPAGESEO.html', function(req, res){
  res.sendFile(path.join(__dirname, 'view/DifferencebetweenONPAGEandOFFPAGESEO.html'));
});
app.get('/SiteMap.html', function(req, res){
  res.sendFile(path.join(__dirname, 'view/SiteMap.html'));
});
app.get('/URLCanonicalization.html', function(req, res){
  res.sendFile(path.join(__dirname, 'view/URLCanonicalization.html'));
});
app.get('/google5b2c980043e913c4.html', function(req, res){
  res.sendFile(path.join(__dirname, 'view/google5b2c980043e913c4.html'));
});

app.get('/additional_contents.html', function(req, res){
  res.sendFile(path.join(__dirname, 'view/additional_contents.html'));
});

app.get('/SitesMobileResponsiveDesign.html', function(req, res){
  res.sendFile(path.join(__dirname, 'view/SitesMobileResponsiveDesign.html'));
});


app.get('/SEO_CONTENTS.html', function(req, res){
  res.sendFile(path.join(__dirname, 'view/SEO_CONTENTS.html'));
});






app.get('/backlinks.html', function(req, res){
  res.sendFile(path.join(__dirname, 'view/backlinks.html'));
});



//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});