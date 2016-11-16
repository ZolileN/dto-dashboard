import * as types from './_types';
import { v1 as makeUuid } from 'uuid';


export const setToast = (message, level = 'info', id = makeUuid()) => ({
  type: types.UI_TOAST_SET_TOAST,
  payload: {
    id,
    message,
    level
  }
});

export const clearToast = id => ({
  type: types.UI_TOAST_CLEAR_TOAST,
  payload: {
    id
  }
});
