import dbQuery from '../db/dev/dbQuery';
import {
  valid,
  isEmpty,
} from '../helpers/validations';
import updateString from '../db/dev/dbQueryString';


const updateUsers = async (req, res) => {
  const {
    first_name: firstName, last_name: lastName, phone,
  } = req.body;

  if (isEmpty(firstName)) {
    req.flash('error_msg', 'Имя не введено');
  }

  if (isEmpty(lastName)) {
    req.flash('error_msg', 'Фамилия не введена');
  }

  if (isEmpty(phone)) {
    req.flash('error_msg', 'Телефон не введен');
  }

  const errorMsg = req.flash('error_msg');
  console.log(errorMsg);

  if (errorMsg.length) {
    console.log(errorMsg.length);
    res.render('edit.hbs', { errorMsg }); // отсановился здесь ошибка не загружается страница
  }

  const values = [
    valid(firstName),
    valid(lastName),
    valid(phone),
  ];

  const updateUserQuery = updateString(values, 'id', req.user.id);

  console.log('data', updateUserQuery, values);
  try {
    const { rows } = await dbQuery.query(updateUserQuery, values);

    if (rows[0]) {
      req.flash('success_msg', 'Данные обновлены');
    }

    const successMsg = req.flash('success_msg');

    res.render('login.hbs', { successMsg });
  } catch (error) {
    console.log(error);
    // if (error.constraint === 'users_email_key') {
    //   req.flash('error_msg', 'Аккаунт с такой почтой уже существует');
    // }

    // if (error.constraint === 'users_login_key') {
    //   req.flash('error_msg', 'Аккаунт с таким логином уже существует');
    // }

    res.render('edit.hbs', { errorMsg: req.flash('error_msg') });
  }
};

export default updateUsers;
