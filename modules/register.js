const registerFunc = {
  registerUser: (req, res) => {
    let md5 = require('md5'),
        username = req.body.username,
        password = req.body.password,
        email = req.body.email;
    md5.update(password);
    let passwordHashed = md5.digest('hex');
    username.find({username: username}, (err, User) => {
      if (User.length === 0) {
        let User = new User({
          username: username,
          password: passwordHashed,
          email: email
        })
        User.save((err, user) => {
          if (err) {
            console.log('error', errMessage);
          } else {
            console.log(user)
            res.send({code: 1})
          }
        })
      } else {
        res.send({code: 2})
      }
    })
  }
}

module.exports = registerFunc
