const match = <T extends string | number | symbol, Return extends {}>(
  key: T,
  map: { [key in T]: Return }
) => {
  return map[key];
};

export default match;
