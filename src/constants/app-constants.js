export default {
  REGEX: {
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PASSWORD: /^(?=.*[0-9])(.+){8}$/
  },
  MAX_MEDIA_SIZE: 4 * 1024 * 1024 * 1024
};