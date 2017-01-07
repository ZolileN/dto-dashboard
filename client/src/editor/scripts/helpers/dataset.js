export const getHumanisedUnits = units => {
  switch (units) {
    case 'n':
    case 's':
    case 'i':
      return '';
    case '%':
    case '$':
      return units;
    default:
      if (process.env.NODE_ENV !== 'test') {
        console.error('Units provided do not match those available');
      }
      return units;
  }
};
