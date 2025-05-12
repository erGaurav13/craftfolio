const authService = require('./auth.service');

class AuthController {
  async signup(req, res) {
    try {
      const result = await authService.signup(req.body);
      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async login(req, res) {
    try {
      const result = await authService.login(req.body);
      res.status(200).json(result);
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  }
}

module.exports = new AuthController();
