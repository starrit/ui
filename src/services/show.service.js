import {prepareUrl} from 'AppUtils/url-functions';
import apiUrls from 'constants/api-urls';

export const getAllShows = () => fetch(apiUrls.show.all).then(res => res.json());

export const getShow = id => fetch(prepareUrl(apiUrls.show.show, {id})).then(res => res.json());

export default {
  getAllShows,
  getShow
};
