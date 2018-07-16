import actionTypes from 'constants/action-types';
import reducer from './isUploadModalOpen';

describe('Upload Modal Reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toBeFalsy();
  });

  it('should set the open state of upload modal', () => {
    expect(reducer(undefined, {
      type: actionTypes.uploadModalState.OPEN
    })).toBeTruthy();
  });

  it('should set the close state of upload modal', () => {
    expect(reducer(undefined, {
      type: actionTypes.uploadModalState.CLOSE
    })).toBeFalsy();
  });
});
