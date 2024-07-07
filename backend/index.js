const express = require('express');
const mongoose = require('mongoose');
const URL =  `mongodb+srv://soufianehamdach28:OtP0M6eboDrOIONK@cluster0.7zlyvms.mongodb.net/ecom_store`; 
const userRoutes = require('./Routes/userRoutes');
const productRoutes = require('./Routes/productRoutes');
const categoryRoutes = require('./Routes/categoryRoutes');
const orderRoutes = require('./Routes/orderRoutes');
const orderDetailRoutes = require('./Routes/orderDetailRoutes');
const couponRoutes = require('./Routes/couponRoutes');
const historyRoutes = require('./Routes/historyRoutes');
const loyaltyRoutes = require('./Routes/loyaltyRoutes');
const notificationRoutes = require('./Routes/notificationRoutes');
const orderCouponRoutes = require('./Routes/orderCouponRoutes');
const reviewRoutes = require('./Routes/reviewRoutes');
const stockAlertRoutes = require('./Routes/stockAlertRoutes');
const supportRoutes = require('./Routes/supportRoutes');
const wishlistRoutes = require('./Routes/wishlistRoutes')

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use(userRoutes);
app.use(productRoutes);
app.use(categoryRoutes);
app.use(orderRoutes);
app.use(orderDetailRoutes);
app.use(couponRoutes);
app.use(historyRoutes);
app.use(loyaltyRoutes);
app.use(notificationRoutes);
app.use(orderCouponRoutes);
app.use(reviewRoutes);
app.use(stockAlertRoutes);
app.use(supportRoutes);
app.use(wishlistRoutes);

// MongoDB connection
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Connection error', error);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
