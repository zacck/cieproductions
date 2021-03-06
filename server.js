//load module
var express = require('express');
var path = require('path');

//create our app
var app = express();
const PORT = process.env.PORT || 3000;

/*HTTPS TO HTTP
app.use(function (req, res, next){
  //if over http
  if(req.headers['x-forwarded-proto'] ===  'http') {
    res.redirect('https://'+req.hostname +req.url);
  } else {
    next();
  }
});
*/


//show app folder to serve
app.use(express.static(__dirname + '/public/'))// specifies a a folder name to expose

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.get('/.well-known/acme-challenge/:content', function(req, res) {
	res.send('9DfFSonoe0dwFmedMQqbHWYv5fNYHF0-o9b6x5eTmJo.zPkW8YHWcnFzxlXv4QBLG87lSCbw_KunsO076Bmk9y8')
})


//start the server
app.listen(PORT, function(){ // takes the port you are serving to and a function
  console.log('Express Server is up on port ' + PORT);//log top console
});
