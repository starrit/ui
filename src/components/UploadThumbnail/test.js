import React from 'react';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

import {UploadThumbnail} from './';
import * as thumbnailUploadService from 'AppServices/thumbnail-upload.service';
jest.mock('AppServices/thumbnail-upload.service');

describe('UploadThumbnail component', () => {
  beforeAll(() => {
    thumbnailUploadService.uploadThumbnail = (file, url, progressFunction, completeFunction) => {
      setTimeout(() => {
        progressFunction({
          loaded: file.size * file.loaded / 100,
          total: file.size
        });
      });
      setTimeout(() => {
        completeFunction();
      }, 100);
    };
  });

  it('should render componenet', () => {
    const wrapper = shallow(<UploadThumbnail uploadUrl="" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should open file browser', () => {
    const spyOnFocusInput = jest.spyOn(UploadThumbnail.prototype, 'focusInput');
    const wrapper = mount(<UploadThumbnail uploadUrl="" />);
    wrapper.find('.uploadThumbnail').simulate('click');
    expect(spyOnFocusInput).toHaveBeenCalled();
  });

  it('should fail uploading thumbnail', () => {
    const addNotificationMock = jest.fn();
    const wrapper = mount(<UploadThumbnail uploadUrl="" addNotification={addNotificationMock} />);

    wrapper.instance().onImageSelect({
      type: 'plain/text'
    });

    expect(addNotificationMock).toHaveBeenCalledWith({
      text: 'File type not supported',
      type: 'negative'
    });
  });

  it('should call onImageSelect on selecting Image', () => {
    const spyOnImageSelect = jest.spyOn(UploadThumbnail.prototype, 'onImageSelect');
    const wrapper = mount(<UploadThumbnail uploadUrl="" addNotification={jest.fn()} />);
    wrapper.find('input').simulate('change');
    expect(spyOnImageSelect).toHaveBeenCalled();
  });

  it('should upload thumbnail', done => {
    const addNotificationMock = jest.fn();
    const onChangeMock = jest.fn();
    const wrapper = mount(<UploadThumbnail uploadUrl="" onChange={onChangeMock} addNotification={addNotificationMock} />);

    wrapper.instance().onImageSelect(new Blob([''], {type: 'image/png'}));

    setTimeout(() => {
      expect(addNotificationMock).toHaveBeenCalledWith({
        text: 'Thumbnail uploaded successfully',
        type: 'positive'
      });
      expect(onChangeMock).toHaveBeenCalled();
      done();
    }, 1000);
  });
});
