import jwt from 'jsonwebtoken';
import config from '../config/config';

const verifyToken = async (req, res, next) => {
  const { token } = req.cookies;

  try {
    const decoded = jwt.verify(token, config.SECRET_JWT);

    req.user = {
      id: decoded.id,
      login: decoded.login,
      email: decoded.email,
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      admin: decoded.admin,
    };

    next();
  } catch (error) {
    next(); // переделать
  }
};

export default verifyToken;
