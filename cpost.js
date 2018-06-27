var express = require('express')
var app = express()
var path=require('path')
var bodyParser = require('body-parser');
var da1=require('./comments.js')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/dalist',function(req,res){
    da1.find({},function(err,data){
        res.json(data)
    })
 });
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/',function(req,res,next){
    res.render('index',{});
});
app.post('/createnew',function(req, res){
    console.log(JSON.stringify(req.body));
    da1.create({
       name:req.body.name,
       email:req.body.email,
       phonenumber:req.body.phonenumber,
       comments: req.body.comments
    },function (err, small) {
        if (err) console.log('Error' + err);
        else {
            res.send('<html>' +
                '<body>' +
                'Redirecting you in &nbsp;' +
                '    <span id="counter">5</span>' +
                '    <script>' +
                '        setInterval(function() {' +
                '            var div = document.querySelector("#counter");' +
                '            var count = div.textContent * 1 - 1;' +
                '            div.textContent = count;' +
                '            if (count <= 0) {' +
                '                window.location.href="/";' +
                '            }' +
                '        }, 1000);' +
                '    </script>' +
                '</body>' +
                '</html>');
             }
     });
    
})

app.use('/routing', express.static(path.join(__dirname, 'routing')))
app.listen(3000)
console.log("Server listening at 127.0.0.1:3000");