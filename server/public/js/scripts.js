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
  const cookie = getCookie('likes').split(',');
  if (!cookie) {
    document.getElementById(`icon-${id}`).innerHTML = 'favorite';
    setCookie('likes', id);
  } else if (cookie.includes(String(id))) {
    document.getElementById(`icon-${id}`).innerHTML = 'favorite_border';
    const unLikeCookie = cookie.filter((n) => n !== String(id));
    setCookie('likes', unLikeCookie);
  } else {
    document.getElementById(`icon-${id}`).innerHTML = 'favorite';
    setCookie('likes', `${cookie},${id}`);
  }
};

getCookie('likes').split(',').forEach((n) => {
  const inonElement = document.getElementById(`icon-${n}`);
  if (inonElement) {
    inonElement.innerHTML = 'favorite';
  }
});
