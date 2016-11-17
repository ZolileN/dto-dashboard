export const getHumanisedUnits = units => {
  switch (units) {
    case 'n':
    case 's':
    case 'i':
      return '';
    case '%':
    case '$':
    default:
      return units;
  }
};
