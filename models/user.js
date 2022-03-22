var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  username : {
    type : String,
    index : true,
    unique : true
  },
  password : String,
  createdAt : {
    type : Date,
    default : Date.now
  }

});

//encryption password
userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password'))
  	return next();
  bcrypt.genSalt(10, function(err, salt) {
    if (err)
    	return next(err);
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err)
      	return next(err);
      user.password = hash;
      next();
    });
  });
})

// compare password in the database and the one that the user type in
userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}


const User = mongoose.model('user', userSchema);
module.exports = User;
