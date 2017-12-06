var passport = require('passport').Strategy
var FacebookStrategy = require('passport-facebook').Strategy
var keys = require('./keys');
var db = require('../models/index');

module.exports = function(passport) {

passport.use(
	new FacebookStrategy ({
	//options for the FB strategy
		clientID: keys.facebook.clientID,
		clientSecret: keys.facebook.clientSecret,
		callbackURL: '/facebook/auth/callback'
	}, function(accessToken, refreshToken, profile, cb) {
		//passport callback function

		db.User.findOne({
			where: {
				facebook_id: profile.id
			}
		})
		.then(function(user) {
			  var email = profile._json.email;
	          var first_name = profile._json.first_name;
	          var last_name = profile._json.last_name;

	          if (user) {
	            user.facebook_id = profile.id
	            user.facebook_email = email
	            user.facebook_name = (`${ first_name } ${ last_name }`).trim()
	            user.facebook_token = accessToken

	            return user.save()
	          }

	          return db.User.create({
	            facebook_id: profile.id,
	            facebook_email: email,
	            facebook_name: (`${ first_name } ${ last_name }`).trim(),
	            facebook_token: accessToken,
	          })
        })
        .then(function(user) {
          cb(null, user)
        })
        .catch(function(err) {
          cb(err)
        })
    }
  ))

  passport.serializeUser(function(user, cb) {

    cb(null, user)
  })

  passport.deserializeUser(function(obj, cb) {
    delete obj.password

    cb(null, obj)
  })
  
};