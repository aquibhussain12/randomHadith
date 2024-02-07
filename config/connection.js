const mongoose =require('mongoose');

mongoose.connect(process.env.MONGO_URI);
const conn =mongoose.connection;
conn.on('error', console.error.bind(console, 'MongoDB connection error:'));
conn.once('open', () => {
  console.log('Connected to database');
});
