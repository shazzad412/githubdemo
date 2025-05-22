// seed.js
const mongoose = require('mongoose');
const Product = require('./models/product');

// MongoDB কানেকশন
mongoose.connect('mongodb://localhost:27017/handicraft', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Connected');
})
.catch(err => console.error('MongoDB connection error:', err));

// Seed Function
const seedProducts = async () => {
  const products = [
    {
      name: "Handmade Jute Bag",
      price: 450,
      category: "Bags",
      description: "Eco-friendly jute bag"
    },
    {
      name: "Clay Flower Vase",
      price: 600,
      category: "Decor",
      description: "Beautifully handcrafted clay vase"
    },
    {
      name: "Bamboo Wall Lamp",
      price: 1200,
      category: "Lighting",
      description: "Handmade bamboo lamp"
    },
    {
      name: "Wooden Serving Tray",
      price: 850,
      category: "Kitchenware",
      description: "Elegant wooden tray"
    },
    {
      name: "Hand-painted Coasters",
      price: 300,
      category: "Tableware",
      description: "Set of 4 hand-painted coasters"
    }
  ];

  // Insert the data into the database
  try {
    await Product.insertMany(products);
    console.log("Sample products inserted!");
    mongoose.connection.close(); // Disconnect after seeding
  } catch (err) {
    console.error("Error inserting products:", err);
  }
};

// Call seed function to insert data
seedProducts();
