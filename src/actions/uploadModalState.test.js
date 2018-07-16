import actionTypes from 'constants/action-types';
import uploadModalActions from './uploadModalState';

describe('Upload Modal Actions', () => {
  it('should open the upload modal', () => {
    expect(uploadModalActions.open()).toEqual({
      type: actionTypes.uploadModalState.OPEN
    });
  });

  it('should delete existing notification from the state', () => {
    expect(uploadModalActions.close()).toEqual({
      type: actionTypes.uploadModalState.CLOSE
    });
  });
});
