$(document).ready(() => {
  $('.sidenav').sidenav({
    closeOnClick: true,
  });
});

$(document).ready(() => {
  $('.collapsible').collapsible();
});

$(document).ready(() => {
  $('select').formSelect();
});

$(document).ready(() => {
  $('.materialboxed').materialbox();
});

function getCookie(name) {
  const matches = document.cookie.match(new RegExp(
    `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`,
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
  let date = new Date(Date.now() + 31449600e3);
  date = date.toUTCString();
  options = {
    path: '/',
    'max-age': date,
    samesite: 'strict',
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  for (const optionKey in options) {
    updatedCookie += `; ${optionKey}`;
    const optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += `=${optionValue}`;
    }
  }
  document.cookie = updatedCookie;
}

const like = (id) => {
  const cookie = getCookie('likes');
  if (!cookie) {
    setCookie('likes', id);
  } else if (cookie.split(', ').includes(String(id))) {
    const unLikeCookie = cookie.split(', ').filter((n) => n !== String(id)); // где-то здесь ошибка
    setCookie('likes', unLikeCookie);
  } else {
    setCookie('likes', `${cookie}, ${id}`);
  }


  const cookieTest = getCookie('likes'); // убрать
  console.log(cookieTest);
};
