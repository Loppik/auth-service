const authService = require('../services/auth-service');

const crypto = require('../../../crypto');

exports.login = async (req, res) => {
  try {
    const siteName = req.baseUrl.slice(1); // FIXME: add interceptor for adding site name to body
    const data = await authService.login(siteName, req.body.user)
    res.send(data);
  } catch (err) {
    res.status(500);
    res.send({ msg: 'Login failed', err: err.message });
  }
};

exports.registration = async (req, res) => {
  try {
    const siteName = req.baseUrl.slice(1);
    const commandInfo = await authService.registration(siteName, req.body.user);
    res.send(commandInfo);
  } catch (err) {
    res.status(500);
    res.send({ msg: 'Registration failed', err: err.message });
  }
};
