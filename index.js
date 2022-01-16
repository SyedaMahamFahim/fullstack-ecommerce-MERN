const express=require('express')
const app=express()

const database=require('./database/connection')
const productRoute=require('./routes/productsRoute')
const errorMiddleware=require('./middleware/error')
const userRoute=require('./routes/userRoute')
const orders=require('./routes/orderRoute')
const payment=require('./routes/paymentRoute')
const path = require("path");
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");

const PORT=process.env.PORT || 8800

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "configuration/config.env" });
}

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

// App Methods
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({useTempFiles: true}));

// Routes
app.use('/api/v1/products',productRoute);
app.use('/api/v1/user',userRoute)
app.use('/api/v1/orders',orders)
app.use('/api/v1/payment',payment)

app.use(express.static(path.join(__dirname, "./client/build")));


app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});

// Middleware for error
app.use(errorMiddleware)

const server=app.listen(PORT,()=>{
    console.log(`Backend is running ar port 8800`)
})

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
    server.close(() => {
      process.exit(1);
    });
});