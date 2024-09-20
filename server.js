const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/connectDB.js");
const userRoute = require("./routes/userRoute.js")


// config dot env file
dotenv.config();

//databse call
connectDB();


//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
//user route
app.use('/v1/users', userRoute)

// transection routes
app.use('/v1/transections', require("./routes/transectionRoute.js"))



//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});







