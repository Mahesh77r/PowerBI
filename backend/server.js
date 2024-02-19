const express  =require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser=  require("body-parser")

const reportRouter = require('./routes/routes.js')

// database connection
require('./config/DB.js').connect();


app.use(cookieParser());
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


// Routing
app.use("/", reportRouter);

app.listen(process.env.PORT ,() =>{
   console.log(`server is running on port ${process.env.PORT}`)
})
