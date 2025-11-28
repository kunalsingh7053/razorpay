const express = require("express");
const productRoutes = require('./routes/product.routes');
const cors = require('cors');
const app = express();
const paymentRoutes = require('./routes/payment.route');

// Allowed frontend URLs
const allowedOrigins = [
  "https://razorpay-frontend-li8y.onrender.com",
  "https://razar.netlify.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/payments', paymentRoutes);

module.exports = app;
