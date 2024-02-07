const mongoose =require('mongoose');

mongoose.connect('mongodb+srv://aquibaquibdar12:aquibg%4012@mongomuslim.5q97xok.mongodb.net/Hadith');
const conn =mongoose.connection;
conn.on('error', console.error.bind(console, 'MongoDB connection error:'));
conn.once('open', () => {
  console.log('Connected to database');
});
