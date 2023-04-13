const express = require('express');
const router = express.Router();
const {
  register,
  login,
  updatePhoto,
} = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.post('/updatePhoto', updatePhoto); // Add this line to create a new route for updating the user's photo

module.exports = router;
