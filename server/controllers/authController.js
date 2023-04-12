const bcrypt = require('bcrypt');
const uid = require('uid');
const userSchema = require('../schemas/userSchema');

module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body;

    const hashedPass = await bcrypt.hash(password, 10);

    const userInDb = new userSchema({
      secret: uid.uid(),
      username,
      password: hashedPass,
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
    });
  },
};
