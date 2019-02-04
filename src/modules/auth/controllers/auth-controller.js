const authService = require('../services/auth-service');

exports.registration = async (req, res) => {
  try {
    const siteName = req.baseUrl.slice(1);
    console.log(siteName);
    const commandInfo = await authService.registration(siteName, req.body.user);
    res.send(commandInfo);
  } catch (err) {
    res.status(500);
    res.send({ msg: 'Registration failed', err: err.message });
  }
};
