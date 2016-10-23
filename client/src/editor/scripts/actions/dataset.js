import * as types from "./_types";
import { setToast } from './toast';
import getRequestKeyHOC from './../utils/getRequestKey';

export const getRequestKey = getRequestKeyHOC('dataset');


export const updateDataset = formData => ({
  type: types.API,
  payload: {
    url: `datasets/${formData.id}`,
    method: 'PUT',
    data: formData,
    key: getRequestKey(formData.id, 'update'),
    successActions: [
      types.UPDATE_DATASET,
      () => setToast(`Dataset: ${formData.name} updated`)
    ],
    errorActions: [
      () => setToast(`Couldn't update dataset: ${formData.name}`, 'error')
    ]
  }
});
