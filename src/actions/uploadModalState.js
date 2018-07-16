import actionTypes from 'constants/action-types';

export default {
  open: () => ({
    type: actionTypes.uploadModalState.OPEN
  }),
  close: () => ({
    type: actionTypes.uploadModalState.CLOSE
  })
};
