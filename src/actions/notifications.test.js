import actionTypes from 'constants/action-types';
import notificationActions from './notifications';

describe('Notification Actions', () => {
  it('should add a new notification in the state', () => {
    const newNotf = {
      text: 'Lorem ipsum dolor sit amet'
    };

    expect(notificationActions.add(newNotf)).toEqual({
      type: actionTypes.notification.ADD,
      payload: newNotf
    });
  });

  it('should delete existing notification from the state', () => {
    expect(notificationActions.delete(5)).toEqual({
      type: actionTypes.notification.DELETE,
      payload: 5
    });
  });
});
