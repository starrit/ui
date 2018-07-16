import actionTypes from 'constants/action-types';

export default {
  add: notf => ({
    type: actionTypes.notification.ADD,
    payload: notf
  }),
  delete: id => ({
    type: actionTypes.notification.DELETE,
    payload: id
  })
};
