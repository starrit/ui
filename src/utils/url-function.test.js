import {prepareUrl} from './url-functions';

describe('URL functions', () => {
  it('should return the provided url without any change', () => {
    expect(prepareUrl('/show/:id/episode/:episodeId')).toBe('/show/:id/episode/:episodeId');
  });

  it('should replace variables in the provided url', () => {
    expect(prepareUrl('/show/:id/episode/:episodeId', {
      id: 10,
      episodeId: 56
    })).toBe('/show/10/episode/56');
  });
});
