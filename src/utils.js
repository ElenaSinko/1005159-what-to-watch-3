export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const unique = (arr) => {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
};

