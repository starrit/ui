import {prepareUrl} from 'AppUtils/url-functions';
import apiUrls from 'constants/api-urls';
import fetchJsonp from 'fetch-jsonp';

export const getAllMedia = () => fetch(apiUrls.media.all).then(res => res.json());

export const getMedia = id => fetch(prepareUrl(apiUrls.media.media, {id})).then(res => res.json());

export const getShowMedia = episodeUrl => fetch(episodeUrl).then(res => res.json());

/**
 * Service function to upload Episode
 * @param {File} file - File to upload
 * @param {Function} progressCallback - Function to call to track file upload progress
 * @param {Function} completeCallback - Function to call after upload complete
 */
export const uploadMedia = (file) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append('file', file);

    xhr.onload = e => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      }
      else {
        reject(xhr.statusText);
      }
    };
    xhr.open('post', apiUrls.media.uploadNew, true);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(formData);
  });
};

/**
 * Fetches progress of an on going file upload
 */
export const uploadProgress = () => {
  return fetchJsonp(apiUrls.media.uploadProgress).then(res => res.json());
};

export const deleteEpisode = id => fetch(prepareUrl('https://jsonplaceholder.typicode.com/posts'), {method: 'POST', body: {uid: id}})
  .then(res => res.json());
