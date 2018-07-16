import fetchMock from 'fetch-mock';
import xhrMock from 'xhr-mock';

import apiUrls from 'constants/api-urls';
import {prepareUrl} from 'AppUtils/url-functions';
import {getAllMedia, getMedia, getShowMedia, uploadMedia, deleteEpisode, uploadProgress} from './episode.service';

const dummyEpisode = {
  uid: 0,
  name: 'Media'
};

describe('Episode service', () => {
  beforeAll(() => {
    fetchMock
      .get(apiUrls.media.all, JSON.stringify([dummyEpisode]))
      .get(apiUrls.media.media, JSON.stringify(dummyEpisode))
      .get(apiUrls.media.uploadProgress, JSON.stringify({state: 'uploading', size: 100, received: 400}));
  });
  beforeEach(fetchMock.reset);

  it('should call API for all episodes', () => {
    getAllMedia();
    expect(fetchMock.called(apiUrls.media.all, 'GET')).toBeTruthy();
  });

  it('should return fetched data for all episodes', () => {
    const episodes = getAllMedia();
    expect(episodes).resolves.toEqual([dummyEpisode]);
  });

  it('should call API for a media', () => {
    getMedia(10);
    expect(fetchMock.called(prepareUrl(apiUrls.media.media, {id: 10}), 'GET')).toBeTruthy();
  });

  it('should return fetch data for a media', () => {
    const media = getMedia(10);
    expect(media).resolves.toEqual(dummyEpisode);
  });

  it('should call API to get a Show\'s Media', () => {
    const media = getShowMedia(apiUrls.media.all);
    expect(media).resolves.toEqual([dummyEpisode]);
  });

  it('should call API to get a Show\'s Media', () => {
    let mock = fetchMock.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify([dummyEpisode]));
    const media = deleteEpisode(1);
    expect(mock.called('https://jsonplaceholder.typicode.com/posts')).toBeTruthy();
    expect(mock.lastOptions()).toEqual({method: 'POST', body: {uid: 1}});
    expect(media).resolves.toEqual([dummyEpisode]);
  });

  it('should upload media successfully', done => {
    xhrMock.setup();
    xhrMock.post(apiUrls.media.uploadNew, {
      status: 201,
      body: {data: 'abc'}
    });

    var fakeFile = new Blob([''], {type: 'text/html'});
    fakeFile.lastModifiedDate = '';
    fakeFile.name = 'filename';

    let promise = uploadMedia(fakeFile);

    setTimeout(() => {
      expect(promise).resolves.toEqual({ data: 'abc' });
      done();
    });

    xhrMock.teardown();
  });

  it('should return progress data for media', () => {
    expect(uploadProgress()).resolves.toEqual({ state: 'uploading', size: 100, received: 400 });
  });
});
