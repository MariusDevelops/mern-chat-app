const bcrypt = require('bcrypt');
const uid = require('uid');
const userSchema = require('../schemas/userSchema');

module.exports = {
  register: async (req, res) => {
    const { username, password, imageUrl } = req.body;

    const hashedPass = await bcrypt.hash(password, 10);

    const userInDb = new userSchema({
      secret: uid.uid(),
      username,
      password: hashedPass,
      imageUrl,
    });

    await userInDb.save();

    res.send({ success: true, message: '' });
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const userExists = await userSchema.findOne({ username });

    // console.log(userExists);
    if (!userExists)
      return res.send({ success: false, message: 'Bad credentials' });
    const passMatch = await bcrypt.compare(password, userExists.password);

    // console.log(passMatch);
    if (!passMatch)
      return res.send({ success: false, message: 'Bad credentials' });

    return res.send({
      success: true,
      message: '',
      secret: userExists.secret,
      username: userExists.username,
      imageUrl: userExists.imageUrl,
    });
  },
  updatePhoto: async (req, res) => {
    const { secret, imageUrl } = req.body;

    // Find the user by secret
    const user = await userSchema.findOne({ secret });
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: 'User not found' });
    }

    // Update the user's imageUrl field
    user.imageUrl = imageUrl;
    await user.save();

    // Return the updated user object
    res.send({ success: true, message: '', user });
  },
  getUserImage: async (req, res) => {
    const secret = req.params.secret;
    const user = await userSchema.findOne({ secret });

    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: 'User not found' });
    }

    const imageUrl = user.imageUrl;

    res.send({ success: true, message: '', imageUrl });
  },
  getAllUsers: async (req, res) => {
    try {
      const allUsers = await userSchema.find();
      res.send(allUsers);
    } catch (err) {
      console.error(err);
      res.status(500).send({ success: false, message: 'Server error' });
    }
  },
  getUserProfile: async (req, res) => {
    const username = req.params.username;
    const user = await userSchema.findOne({ username });

    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: 'User not found' });
    }

    res.send({
      success: true,
      message: '',
      user: {
        id: user._id,
        username: user.username,
        imageUrl: user.imageUrl,
        secret: user.secret,
      },
    });
  },
};
