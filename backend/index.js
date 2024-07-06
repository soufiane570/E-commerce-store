// // Importing required modules
// const express = require('express');
// const mongoose = require('mongoose');

// // Create an instance of Express
// const app = express();

// // Middleware to parse JSON
// app.use(express.json());

// // Connect to MongoDB using Mongoose
// mongoose.connect('mongodb://localhost:27017/ecom_store', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Verify connection
// mongoose.connection.on('connected', () => {
//   console.log('Connected to MongoDB');
// });

// mongoose.connection.on('error', (err) => {
//   console.error(`MongoDB connection error: ${err}`);
// });

// // Define a simple route
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');

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
mongoose.connect('mongodb://localhost:27017/ecom_store', {
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
