const get = something => {
  // If array
  if (Array.isArray(something)) return something.slice(0);

  // If object
  if (something === Object(something)) return { ...something };

  // Otherwise return the same object
  return something;
};

const Immutable = {
  get,
};

export default Immutable;
