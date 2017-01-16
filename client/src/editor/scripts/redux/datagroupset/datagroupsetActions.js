
import {pick} from 'lodash';


// Action Types

export const types = {
  UPDATE_DATAGROUPSET: 'datagroupset/update'
};


// Actions

/**
 * Create datagroupset
 * @param formData {Object}
 * @returns {Object<Promise>}
 */
export const createDatagroupset = formData => {
  return (dispatch, getState, api) => {
    const promises = formData.map(d => {
      return api(`datasets/${d.dataset_id}/datapoints`, getState().currentUser.token, {
        method: 'POST',
        body: JSON.stringify(d)
      })
    });

    // What's going on here? Basically Promise.all() takes an array of promises as input,
    // and then it gives you another promise that only resolves when every one of those
    // other promises has resolved. It is the asynchronous equivalent of a for-loop.
    //
    // It resolves once all promises in the array resolve
    // or reject as soon as one of them rejects.
    return Promise.all(promises)
      .then(responses => {
        return responses.map(data => {
          dispatch({
            type: types.UPDATE_DATAGROUPSET,
            payload: {
              datapoint: pick(data, ['id', 'ts', 'value', 'created_at', 'updated_at']),
              dataset: {
                id: data.dataset_id,
                datapoint_id: data.id
              }
            }
          });
          return data;
        });
      });
  }
};
