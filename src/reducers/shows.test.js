import reducer from './shows';
import actionTypes from 'constants/action-types';

describe('Shows Reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      shows: [],
      sortBy: null,
      view: 'grid'
    });
  });

  it('should set the Shows List in the state', () => {
    const shows = [{
      thumbnail_url: 'http://url',
      title: 'Best Show',
      media_type: 'AUDIO_ONLY',
      user_rating: 3,
      episode_count: 10,
      date_added: 1522349605827,
      author: 'Silent Jay'
    }];

    expect(reducer(undefined, {
      type: actionTypes.shows.SET_SHOWS,
      payload: shows
    })).toEqual({
      shows: [...shows],
      sortBy: null,
      view: 'grid'
    });
  });

  it('should add a Show in the state', () => {
    const show = {
      thumbnail_url: 'http://url',
      title: 'Best Show',
      media_type: 'AUDIO_ONLY',
      user_rating: 3,
      episode_count: 10,
      date_added: 1522349605827,
      author: 'Silent Jay'
    };

    expect(reducer(undefined, {
      type: actionTypes.shows.ADD_SHOW,
      payload: show
    })).toEqual({
      shows: [].push(show),
      sortBy: null,
      view: 'grid'
    });
  });

  it('should set the sort field in the state', () => {
    expect(reducer(undefined, {
      type: actionTypes.shows.SET_SHOWS_SORT,
      payload: 'title'
    })).toEqual({
      shows: [],
      sortBy: 'title',
      view: 'grid'
    });
  });

  it('should set the view field in the state', () => {
    expect(reducer(undefined, {
      type: actionTypes.shows.SET_VIEW,
      payload: 'table'
    })).toEqual({
      shows: [],
      sortBy: null,
      view: 'table'
    });
  });
});
