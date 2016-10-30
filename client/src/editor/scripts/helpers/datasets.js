import { getLatestDateHash } from './../utils/getLatestDataHash';
import { getNewestDatapoint } from './../reducers/datapoints';


export const getHeadDatapoints = (datasets) => {
  return datasets.map(dataset => {
    return getNewestDatapoint(dataset);
  })
};

export const hasLatestData = (headDatapoints) => {
  return headDatapoints[0].label === getLatestDateHash();
};
