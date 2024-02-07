const express = require('express');
const app = express();
const hadithRoutes = require('./routes/hadithRoutes'); 


const db = require('./config/connection');

// const hadithModel=require('./schema/hadithSchema');
const cors = require('cors');


app.use(cors())
app.use(express.json());


app.use('/api', hadithRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
