import getLatestDateHash from './../utils/getLatestDataHash';
import {
  getDatapointById,
  getNewestDatapoint
} from './../reducers/datapoints';


export const getHeadDatapoints = (datasets) => {
  return datasets.map(d => {
    return getNewestDatapoint(d.datapoints);
  })
};

export const hasLatestData = (datapoints, headDatapoints) => {
  let datapoint = getDatapointById(datapoints, headDatapoints[0]);
  return datapoint ? datapoint.label === getLatestDateHash() : false;
};
