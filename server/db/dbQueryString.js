const updateString = (arr, field, value) => {
  const bodyQueryArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    bodyQueryArr.push(`${arr[i]} = $${i + 1}`);
  }

  const bodyQueryStr = bodyQueryArr.join(', ');

  return `UPDATE users SET ${bodyQueryStr} WHERE ${field} = ${value} returning *`;
};

const selectBooksByGenreString = (arr) => {
  const selectQuery = [];

  for (let i = 0; i < arr.length; i += 1) {
    selectQuery.push(`SELECT * FROM public.books WHERE genre_id = ${arr[i]}`);
  }

  return selectQuery;
};


export { updateString, selectBooksByGenreString };
