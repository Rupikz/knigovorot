import moment from 'moment';

import dbQuery from '../db/dev/dbQuery';

import {
  hashPassword,
  isValidEmail,
  isValidLogin,
  validatePassword,
  isEmpty,
  generateUserToken,
} from '../helpers/validations';

import {
  errorMessage, successMessage, status,
} from '../helpers/status';

const createAdmin = async (req, res) => {
  const {
    email, login, firstName, lastName, password,
  } = req.body;

  const { admin } = req.user;

  const isAdmin = true;
  const createdOn = moment(new Date());

  if (!admin) { // тут я убрал это конструкцию !admin === false
    // errorMessage.error = 'Sorry You are unauthorized to create an admin';
    return res.status(status.bad).send('Sorry You are unauthorized to create an admin'); // исправить все это на флеш
  }

  if (isEmpty(email) || isEmpty(login) || isEmpty(firstName)
    || isEmpty(lastName) || isEmpty(password)) {
    errorMessage.error = 'Email, password, first name and last name field cannot be empty';
    return res.status(status.bad).send(errorMessage);
  }

  if (!isValidEmail(email)) {
    errorMessage.error = 'Please enter a valid Email';
    return res.status(status.bad).send(errorMessage);
  }

  if (!isValidLogin(login)) {
    errorMessage.error = 'Please enter a valid Login';
    return res.status(status.bad).send(errorMessage);
  }

  if (!validatePassword(password)) {
    errorMessage.error = 'Password must be more than five(5) characters';
    return res.status(status.bad).send(errorMessage);
  }
  const hashedPassword = hashPassword(password);
  const createUserQuery = `INSERT INTO
      users(email, login, first_name, last_name, password, admin, created_on)
      VALUES($1, $2, $3, $4, $5, $6, $7)
      returning *`;

  const values = [
    email,
    login,
    firstName,
    lastName,
    hashedPassword,
    isAdmin,
    createdOn,
  ];

  try {
    const { rows } = await dbQuery.query(createUserQuery, values);
    const dbResponse = rows[0];
    delete dbResponse.password;
    const token = generateUserToken(dbResponse.id, dbResponse.email, dbResponse.login,
      dbResponse.first_name, dbResponse.last_name, dbResponse.admin);
    successMessage.data = dbResponse;
    successMessage.data.token = token;
    return res.status(status.created).send(successMessage);
  } catch (error) {
    if (error.routine === '_bt_check_unique') {
      errorMessage.error = 'Admin with that EMAIL already exist';
      return res.status(status.conflict).send(errorMessage);
    }
    return error;
  }
};


const updateUserToAdmin = async (req, res) => {
  const { id } = req.params;
  const { isAdmin } = req.body;

  const { admin } = req.user;
  if (!admin === true) {
    errorMessage.error = 'Sorry You are unauthorized to make a user an admin';
    return res.status(status.bad).send(errorMessage);
  }
  if (isAdmin === '') {
    errorMessage.error = 'Admin Status is needed';
    return res.status(status.bad).send(errorMessage);
  }
  const findUserQuery = 'SELECT * FROM users WHERE id=$1';
  const updateUser = 'UPDATE users SET admin=$1 WHERE id=$2 returning *';
  try {
    const { rows } = await dbQuery.query(findUserQuery, [id]);
    const dbResponse = rows[0];
    if (!dbResponse) {
      errorMessage.error = 'User Cannot be found';
      return res.status(status.notfound).send(errorMessage);
    }
    const values = [
      isAdmin,
      id,
    ];
    const response = await dbQuery.query(updateUser, values);
    const dbResult = response.rows[0];
    delete dbResult.password;
    successMessage.data = dbResult;
    return res.status(status.success).send(successMessage);
  } catch (error) {
    errorMessage.error = 'Operation was not successful';
    return res.status(status.error).send(errorMessage);
  }
};

export {
  createAdmin,
  updateUserToAdmin,
};
