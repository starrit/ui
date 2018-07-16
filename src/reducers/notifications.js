import * as _ from 'lodash';

import actionTypes from 'constants/action-types';

let notificationCount = 0;

export default (state = [], {type, payload}) => {
  switch (type) {
    case actionTypes.notification.ADD:
      const updatedState = [].concat(state);
      payload.id = notificationCount++;
      updatedState.push(payload);
      return updatedState;

    case actionTypes.notification.DELETE:
      const notifications = [].concat(state);
      const notfIndex = _.findIndex(state, {id: payload});
      if (notfIndex >= 0) {
        notifications.splice(notfIndex, 1);
      }
      return notifications;

    default:
      return state;
  }
};
