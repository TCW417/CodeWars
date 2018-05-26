function capitalize(s,arr){;
  return s.split('')
    .map((c, i) => {
      if (arr.includes(i)) return c.toUpperCase();
      return c;
    })
    .join('');
};