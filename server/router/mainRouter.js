const express = require('express');
const router = express.Router();
const {
  register,
  login,
  updatePhoto,
  getUserImage,
  getAllUsers,
} = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);

router.post('/updatePhoto', updatePhoto);
router.get('/getUserImage/:secret', getUserImage);

router.get('/allUsers', getAllUsers); // add this route

module.exports = router;
