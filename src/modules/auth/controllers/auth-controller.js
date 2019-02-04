const authService = require('../services/auth-service');

exports.login = async (req, res) => {
  try {
    const siteName = req.baseUrl.slice(1); // FIXME: add interceptor for adding site name to body
    const tokens = await authService.login(siteName, req.body.user)
    res.send(tokens);
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

exports.refreshTokens = async (req, res) => {
  try {
    const token = await authService.updateToken(req.params.refreshToken);
    res.send(token);
  } catch (err) {
    res.status(500);
    res.send({ msg: 'Refresh token expired', err: err.message });
  }
};
