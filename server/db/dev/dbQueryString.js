const updateString = (arr, field, value) => {
  let bodyQuery = '';
  for (let i = 0; i < arr.length; i += 1) {
    bodyQuery += `${arr[i]} = $${i} `;
  }

  return `UPDATE users SET ${bodyQuery}WHERE ${field} = ${value} returning *`;
};

export default updateString;
