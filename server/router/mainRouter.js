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
const {
  // getAll,
  createConversation,
  allConversations,
  getChat,
  sendMessage,
} = require('../controllers/general');
const loggedIn = require('../middleware/loggedIn');

router.post('/register', register);
router.post('/login', login);

router.post('/updatePhoto', updatePhoto);
router.get('/getUserImage/:secret', getUserImage);

router.get('/allUsers', getAllUsers); // add this route
router.get('/user/:username', getUserProfile);

// router.get('/allUsers', getAll);
router.post('/newConversation', loggedIn, createConversation);
router.post('/getConversations', loggedIn, allConversations);
router.get('/chat/:id', getChat);
router.post('/sendMessage', loggedIn, sendMessage);

module.exports = router;
