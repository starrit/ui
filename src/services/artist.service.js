import {prepareUrl} from 'AppUtils/url-functions';
import apiUrls from 'constants/api-urls';

export const getAllArtists = () => fetch(apiUrls.show.all).then(res => res.json());

export const getArtist = id => fetch(prepareUrl(apiUrls.show.show, {id})).then(res => res.json());

export default {
  getAllArtists,
  getArtist
};
