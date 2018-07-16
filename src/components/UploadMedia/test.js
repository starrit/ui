import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import xhrMock from 'xhr-mock';

configure({adapter: new Adapter()});

import appConstants from 'constants/app-constants';
import UploadMediaConnected, {UploadMedia} from './';
import * as episodeService from 'AppServices/episode.service';
jest.mock('AppServices/episode.service');

const mockAcceptedFiles = [
  {
    name: 'Mock File 1.mp4',
    size: 400 * 1024 * 1024,
    loaded: 40,
    preview: 42
  },
  {
    name: 'Mock File 2.mp4',
    size: 900 * 1024 * 1024,
    loaded: 17,
    preview: 58
  }
];

const mockRejectedFiles = [
  {
    name: 'unsupported-file-type.txt',
    size: 40 * 1024,
    preview: 87
  },
  {
    name: 'very-large-file.mp4',
    size: appConstants.MAX_MEDIA_SIZE * 1.5,
    preview: 93
  }
];

describe('Upload Media Component', () => {
  beforeAll(() => {
    episodeService.uploadProgress = () => {
      return Promise.resolve({state: 'uploading', size: 1, received: 1});
    }
    episodeService.uploadMedia = (file, progressFunction, completeFunction) => {
      return Promise.resolve({});
    };
  });
  it('should render the component', () => {
    const wrapper = shallow(<UploadMedia />);
    wrapper.setState({
      files: mockAcceptedFiles
    });
    wrapper.update();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should handle file drop', done => {
    const addNotificationMock = jest.fn();
    const wrapper = mount(<UploadMedia isModalOpen={true} addNotification={addNotificationMock} />);

    wrapper.instance().onDrop(mockAcceptedFiles, mockRejectedFiles);

    // Rejected Files notification
    expect(addNotificationMock).toHaveBeenCalledTimes(2);
    setTimeout(() => {
      expect(addNotificationMock).toHaveBeenCalledTimes(2);
      done();
    }, 100);
  });

  it('should redirect the user to Media Edit page on clicking notification', () => {
    const wrapper = mount(<UploadMedia history={[]} />);
    wrapper.instance().goToMediaEdit({id: 5});
    expect(wrapper.prop('history')).toEqual(['/media/5/edit']);
  });
});
