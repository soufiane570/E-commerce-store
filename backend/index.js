const express = require('express');
const mongoose = require('mongoose');
const URL =  `mongodb+srv://soufianehamdach28:OtP0M6eboDrOIONK@cluster0.7zlyvms.mongodb.net/ecom_store`; 
const userRoutes = require('./Routes/userRoutes');
const productRoutes = require('./Routes/productRoutes');
const categoryRoutes = require('./Routes/categoryRoutes');
const orderRoutes = require('./Routes/orderRoutes');
const orderDetailRoutes = require('./Routes/orderDetailRoutes');

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
