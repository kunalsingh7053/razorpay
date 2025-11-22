const express = require("express");
const productRoutes = require('./routes/product.routes');
const cors = require('cors');
const app = express();
const paymentRoutes = require('./routes/payment.route');

//middleware
app.use(cors({
  origin: "https://razorpay-frontend-li8y.onrender.com",  // frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());
app.use('/api/products',productRoutes);
app.use('/api/payments',paymentRoutes);

module.exports = app; 