const express = require('express');
const bodyParser = require('body-parser');
const fs    = require('fs');
const dateFormat = require('dateformat');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const exec = require('child_process').exec;

const app = express();

var port = 8091;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('OK');
});

app.get('/iri-stop', function (req, res) {
  var irijar = req.query.irijar;
  var cmd = './iri-stop.sh "'+irijar+'"'; 
  exec(cmd, function(error, stdout, stderr) {
  }); 
  res.send('OK');
});

app.get('/iri-clean', function (req, res) {
  var cmd = './iri-clean.sh'; 
  exec(cmd, function(error, stdout, stderr) {
  }); 
  res.send('OK');
});

app.post('/iri-start', function (req, res) {
  var startcmd = req.body.startcmd;
  var cmd = './iri-start.sh "'+startcmd+'"'; 
  exec(cmd, function(error, stdout, stderr) {
  }); 
  res.send('OK');
});

app.post('/iri-build', function (req, res) {
  var repo = req.body.repo
  var cmd ='./iri-build.sh \"'+repo+'\"';
console.log(repo);
  exec(cmd, function(error, stdout, stderr) {
  }); 
  res.send('OK');
});

app.post('/file-exists', function (req, res) {
  var filename = req.body.name;
  if (fs.existsSync('../'+filename)) {
    res.send("OK");
  }
  else  {
    res.send("NOTOK");
  }
});

app.get('/agent-replace', function (req, res) {
  var url = req.query.url;
  var cmd ='./agent_replace.sh \"'+url+'\"';
  exec(cmd, function(error, stdout, stderr) {
  }); 
});

app.get('/upload-to-server', function (req, res) {
  var uri = req.query.uri;
  var archive = req.query.archive;
  var cmd ='./upload-to-server.sh \"'+uri+'\" \"'+archive+'\"';
  exec(cmd, function(error, stdout, stderr) {
  }); 
  res.send('OK');
});

app.get('/create-archive', function (req, res) {
  var path = req.query.path
  var archive = req.query.archive;
  var cmd ='./create-archive.sh \"'+path+'\" \"'+archive+'\"';
  exec(cmd, function(error, stdout, stderr) {
  }); 
  res.send('OK');
});

app.get('/download-from-server', function (req, res) {
  var archive = req.query.archive;
  var file = '../'+archive;
  res.download(file); // Set disposition and send it.
});

app.get('/spammer-start', function (req, res) {
  var cmd ='./spammer-start.sh';
  exec(cmd, function(error, stdout, stderr) {
  }); 
  res.send('OK');
});

app.get('/spammer-stop', function (req, res) {
  var cmd ='./spammer-stop.sh';
  exec(cmd, function(error, stdout, stderr) {
  }); 
  res.send('OK');
});

app.get('/value-spammer-start', function (req, res) {
  var cmd ='./value-spammer-start.sh';
  exec(cmd, function(error, stdout, stderr) {
  }); 
  res.send('OK');
});

app.get('/value-spammer-stop', function (req, res) {
  var cmd ='./value-spammer-stop.sh';
  exec(cmd, function(error, stdout, stderr) {
  }); 
  res.send('OK');
});

app.listen(port, function () {
  console.log('Agent listening on port '+port);
});
