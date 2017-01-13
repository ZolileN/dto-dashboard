
//~dashboard/scripts/legacy/Helpers/dataAssumptions'
export const assumeIsGroupedByCategory = (groups, type) => {
  return groups.length > 1 && (type !== 'full' || type !== 'kpi-sparkline');
};