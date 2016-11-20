import { pick } from 'lodash';
import * as types from "./_types";


export const createDatagroupset = formData => {

  return (dispatch, getState, api) => {
    const promises = formData.map(d => {
      return api(`datasets/${d.dataset_id}/datapoints`, getState().currentUser.token, {
        method: 'POST',
        body: JSON.stringify(d)
      })
    });

    return Promise.all(promises)
      .then(responses => {
        return responses.map(data => {
          dispatch({
            type: types.UPDATE_DATAGROUPSET,
            payload: {
              datapoint: _.pick(data, ['id', 'ts', 'value', 'created_at', 'updated_at']),
              dataset: {
                id: data.dataset_id,
                datapoint_id: data.id
              }
            }
          });
          return data;
        });
      });
  };
};
