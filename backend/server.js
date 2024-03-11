const express  =require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser=  require("body-parser")
const passport = require('passport')
const reportRouter = require('./routes/routes.js')
// database connection
require('./config/DB.js').connect();
require('./controllers/Auth.js');


// app.use()

app.use(cookieParser());
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routing
app.use("/", reportRouter);

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.listen(process.env.PORT ,() =>{
   console.log(`server is running on port ${process.env.PORT}`)
})
