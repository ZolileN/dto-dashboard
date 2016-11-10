import { pick } from 'lodash';
import * as types from "./_types";


export const createDatagroupset = formData => {

  return (dispatch, getState) => {
    const config = getState().config;
    const rootUrl = config.API_BASE_URL;
    const token = getState().currentUser.token;

    const promises = formData.map(d => {

      // debugging
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve([{"id":867,"dataset_id":5,"ts":"2016-11-08T07:37:09.253Z","value":"1.0","created_at":"2016-11-08T07:37:09.437Z","updated_at":"2016-11-08T07:37:09.437Z"},{"id":868,"dataset_id":6,"ts":"2016-11-08T07:37:09.253Z","value":"123.0","created_at":"2016-11-08T07:37:09.442Z","updated_at":"2016-11-08T07:37:09.442Z"},{"id":866,"dataset_id":7,"ts":"2016-11-08T07:37:09.253Z","value":"213123.0","created_at":"2016-11-08T07:37:09.423Z","updated_at":"2016-11-08T07:37:09.423Z"},{"id":869,"dataset_id":8,"ts":"2016-11-08T07:37:09.253Z","value":"2.0","created_at":"2016-11-08T07:37:09.448Z","updated_at":"2016-11-08T07:37:09.448Z"},{"id":870,"dataset_id":9,"ts":"2016-11-08T07:37:09.253Z","value":"21.0","created_at":"2016-11-08T07:37:09.481Z","updated_at":"2016-11-08T07:37:09.481Z"}]);  // success interface
      //     // reject();  // failure interface
      //   }, 2000)
      // });
      // end debugging

      return fetch(`${rootUrl}datasets/${d.dataset_id}/datapoints`, {
        method: 'POST',
        body: JSON.stringify(d),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        }
      })
        .then(response => {
          if (status >= 200 && status < 300) {
            throw new Error(response.status);
          }
          return response.json()
        })

    });

    return Promise.all(promises)
      .then(responses => {
        debugger
        responses.map(data => {
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
        });
        return responses;
      })
      .catch(err => {
        debugger;
      })
  };
};
