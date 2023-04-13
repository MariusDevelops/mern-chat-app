const express = require('express');
const router = express.Router();
const {
  register,
  login,
  updatePhoto,
  getUserImage,
} = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.post('/updatePhoto', updatePhoto);
router.get('/getUserImage/:secret', getUserImage);

module.exports = router;
