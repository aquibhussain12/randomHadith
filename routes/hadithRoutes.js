const express = require('express');
const router = express.Router();
const Hadith = require('../model/hadithSchema');
const mongoose = require('mongoose');

//api to get random hadith
router.get('/random', async (req, res) => {
      
  try {
    const randomhadith = await Hadith.aggregate([{ $sample: { size: 1 } }])
    
    if (!randomhadith) {
      return res.status(404).json({ error: 'Hadith not found' });
    }

    res.json({ randomhadith });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

});

 module.exports = router;