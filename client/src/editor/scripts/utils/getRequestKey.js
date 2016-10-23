/**
 * Produce a function which creates an action signature
 * @param reducerName
 * @return {Function}
 */
const getRequestKey = reducerName => (type, id) => {
  if (!id) {
    return `${reducerName}/${type}`
  }
  return `${reducerName}/${type}/${id}`
};

export default getRequestKey;
