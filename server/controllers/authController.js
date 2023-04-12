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
};
