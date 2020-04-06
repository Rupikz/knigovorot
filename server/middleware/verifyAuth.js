import jwt from 'jsonwebtoken';
import config from '../config/config';
import {
  errorMessage, status,
} from '../helpers/status';

const verifyToken = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    errorMessage.error = 'Token not provided';
    return res.status(status.bad).send(errorMessage);
  }

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
    errorMessage.error = 'Authentication Failed';
    return res.status(status.unauthorized).send(errorMessage);
  }
};

export default verifyToken;
