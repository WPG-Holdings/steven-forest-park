import Cookie from 'cookie';

export default {
  get: function (key, fromCookie) {
    return Cookie.parse(fromCookie)[key];
  },
  set: function (key, value, options) {
    const expires = (() => {
      const DEFAULT_EXPIRES_YEAR = 1;

      const d = new Date();
      const year = d.getFullYear();
      const month = d.getMonth();
      const day = d.getDate();
      return new Date(year + DEFAULT_EXPIRES_YEAR, month, day);
    })();

    document.cookie = Cookie.serialize(key, value, {
      expires,
      path: '/',
      ...options,
    });
  },
  remove: function (key) {
    const expires = new Date(0);
    const value = '';
    document.cookie = Cookie.serialize(key, value, {
      expires,
      path: '/',
    });
  },
};
