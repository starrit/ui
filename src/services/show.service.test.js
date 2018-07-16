import fetchMock from 'fetch-mock';

import apiUrls from 'constants/api-urls';
import {prepareUrl} from 'AppUtils/url-functions';
import {getAllShows, getShow} from './show.service';

const dummyShow = {
  uid: 0,
  name: 'Show title'
};

describe('Show service', () => {
  beforeAll(() => {
    fetchMock
      .get(apiUrls.show.all, JSON.stringify([dummyShow]))
      .get(apiUrls.show.show, JSON.stringify(dummyShow));
  });
  beforeEach(fetchMock.reset);

  it('should call API for all shows', () => {
    getAllShows();
    expect(fetchMock.called(apiUrls.show.all, 'GET')).toBeTruthy();
  });

  it('should return fetched data for all shows', () => {
    const shows = getAllShows();
    expect(shows).resolves.toEqual([dummyShow]);
  });

  it('should call API for a show', () => {
    getShow(10);
    expect(fetchMock.called(prepareUrl(apiUrls.show.show, {id: 10}), 'GET')).toBeTruthy();
  });

  it('should return fetch data a show', () => {
    const show = getShow(10);
    expect(show).resolves.toEqual(dummyShow);
  });
});
