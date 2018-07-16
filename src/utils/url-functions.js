export const prepareUrl = (url, obj = {}) => {
  const objKeys = Object.keys(obj);
  objKeys.forEach(key => {
    url = url.replace(`:${key}`, obj[key]);
  });
  return url;
};
