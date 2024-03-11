const passport = require("passport")
require("dotenv").config()

const GoogleStrategy = require('passport-google-oauth2').Strategy;



passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.CBURL
  },
  function(accessToken, refreshToken, profile, cb,done) {

    done(null,profile);
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));
passport.serializeUser((user,done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})

// const AuthGoogle = async (req, res) => {
//     console.log("first")
// };
// const AuthGitHub = async (req, res) => {
//     console.log("Second")
// };
// module.exports = {AuthGoogle,AuthGitHub};

