var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  var bodyParser = require('body-parser');
  app.use(bodyParser.json()); //for parsing application/json
  app.use(bodyParser.urlencoded({
    extended: true
  }));

app.get('/', function (req, res) {

    console.log("ok")
    res.send("ok");
});
app.post('/sendmail', function (req, res) {
   console.log('vannu');
    var dataEmail = req.body;
    var nodemailer = require('nodemailer');
    
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'lognplanks@gmail.com',
        pass: 'vriksham'
      }
    });
    
    var mailOptions = {
      from: 'lognplanks@gmail.com',
      to: 'lognplanks@gmail.com',
	  cc:'sanilkumarakhil@gmail.com',
      subject: dataEmail.subject,
      text: dataEmail.comments,
     // html: ' Mail from:' +dataEmail.email+'<b> Name :'+dataEmail.name+'</b>', // html body
      html: '<p><b>Mail From : '+dataEmail.email+'</b></br><b>Name :'+dataEmail.name+'</b></p><p><strong>Subject  :'+dataEmail.comments+'</strong></p>'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.send("notsend");
      } else {
        console.log('Email sent: ' + info.response);
        res.send("send");
      }
    });
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})