import * as types from "./_types";
import { setToast } from './toast';
import getRequestKeyHOC from './../utils/getRequestKey';

export const getRequestKey = getRequestKeyHOC('dashboard');


export const updateDashboard = formData => {
  return {
    type: types.API,
    payload: {
      url: `dashboards/${formData.id}`,
      method: 'PUT',
      data: formData,
      key: getRequestKey(formData.id, 'update'),
      successActions: [
        types.UPDATE_DASHBOARD,
        () => setToast(`Dashboard: ${formData.name} updated`)
      ],
      errorActions: [
        () => setToast(`Couldn't update dashboard: ${formData.name}`, 'error')
      ]
    }
  }
};
