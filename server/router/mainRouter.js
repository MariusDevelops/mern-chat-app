const express = require('express');
const router = express.Router();
const {
  register,
  login,
  updatePhoto,
  getUserImage,
  getAllUsers,
  getUserProfile,
} = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);

router.post('/updatePhoto', updatePhoto);
router.get('/getUserImage/:secret', getUserImage);

router.get('/allUsers', getAllUsers); // add this route
router.get('/user/:username', getUserProfile);

module.exports = router;
