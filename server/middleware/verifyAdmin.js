import dbQuery from '../db/dbQuery';

const verifyUserAdminPanel = async (req, res, next) => {
  if (!req.user) {
    return res.redirect('/404');
  }
  const checkAdminQuery = `SELECT admin FROM public.users WHERE login = '${req.user.login}'`;
  try {
    const rowsSelect = await dbQuery.query(checkAdminQuery);
    const isAdmin = rowsSelect.rows[0].admin;
    if (isAdmin) {
      next();
    } else {
      res.redirect('/404');
    }
  } catch (error) {
    console.log('VerifyAdmin: ', error);
    res.redirect('/404');
  }
};

export default verifyUserAdminPanel;
