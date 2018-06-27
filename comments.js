var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/comments');

var daSchema = mongoose.Schema({
  name: String,
  email: {type:String},
  phonenumber: Number,
  comments: {type:String}
});


var ani = mongoose.model('Ani',daSchema,'comments');

module.exports = ani;