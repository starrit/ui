import xhrMock from 'xhr-mock';
import {uploadThumbnail} from './thumbnail-upload.service';

describe('Upload Thumbnail Service', () => {
  it('should upload thumbnail', done => {
    xhrMock.setup();
    xhrMock.post('/', {
      status: 201
    });

    var blob = new Blob([''], {type: 'text/html'});
    const progressCallbackMock = jest.fn();
    const completeCallbackMock = jest.fn();
    uploadThumbnail(blob, '/', progressCallbackMock, completeCallbackMock);
    setTimeout(() => {
      expect(progressCallbackMock).toHaveBeenCalled();
      expect(completeCallbackMock).toHaveBeenCalled();
      done();
    });

    xhrMock.teardown();
  });
});
