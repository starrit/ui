import actionTypes from 'constants/action-types';
import reducer from './notifications';

const initialState = [
  {
    id: 1,
    text: 'Notification 1'
  },
  {
    id: 2,
    text: 'Notification 2'
  },
  {
    id: 3,
    text: 'Notification 3'
  }
];

describe('Notification reducer', () => {
  it('should return the initial notifications stored in the state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should add a new notification in the state', () => {
    const newNotf = {
      text: 'Lorem ipsum'
    };
    const updatedState = reducer(undefined, {
      type: actionTypes.notification.ADD,
      payload: newNotf
    });
    expect(updatedState).toMatchObject([
      newNotf
    ]);
  });

  it('should delete the existing notification from the state', () => {
    const updatedState = reducer(initialState, {
      type: actionTypes.notification.DELETE,
      payload: 2
    });

    const matchObject = [...initialState];
    matchObject.splice(1, 1);
    expect(updatedState).toMatchObject(matchObject);
  });
});
