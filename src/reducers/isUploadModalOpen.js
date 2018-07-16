import actions from 'constants/action-types';

export default (state = false, {type}) => {
  switch (type) {
    case actions.uploadModalState.OPEN:
      return true;
    case actions.uploadModalState.CLOSE:
      return false;
    default:
      return state;
  }
};
