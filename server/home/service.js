import React from 'react';
import { renderToString } from 'react-dom/server';
import template from '../template';

module.exports = class CareService {

  /**
   * Gets Promise of PreRendered Care Page.
   * Returns null if current etag would match etag passed in.
   * Error is thrown if data for desired region/locality/type is not present.
   * @param existingEtag passed in etag for comparison.
   * @param type type of care centers desired.
   * @param region region of care centers desired.
   * @param locality locality of care centers desired.
   * @param page current page requested.
   * @param path path of current request.
   * @returns {Promise.<T>}
   */
  getHomePage(existingEtag, type, region, locality, page, path) {
    // GET Care data from API.
    React.createElement()
    const appString = renderToString(<h1>Hello</h1>)
    const out = {
      body : template({
        body: appString,
        title: 'StarrIT L.L.C. Providing a complete set of consulting services to meet your business needs. ',
        initialState: JSON.stringify({}),
        cssBundle: '', //ENV['main.css'],
        jsBundle: 'dist/main.js'
      })};

    return out;
  }

  /**
   * Validates data returned from API to ensure that data for given locality exists.
   * @param data data returned from API.
   * @param care_type type of desired care centers.
   * @param region region of desired care centers.
   * @param locality of desired care centers.
   */
  validateCareData(data, care_type, region, locality)  {

    // ensure that 'meta' section of response contains at least one item including locality information.
    const meta = data['meta'];
    let locality_info;
    for (var i in meta) {
      if (meta[i]['locality']) {
        locality_info = meta[i]['locality'];
        break;
      }
    }
    if (!locality_info) {
      throw new Error(`Locality info not found for: ${care_type}/${region}/${locality}`)
    }

    // ensure that the type of at least one included section is 'destination_page'
    const included = data['included'];
    let cms_content;
    for (var j in included) {
      if (included[j]['type'] === 'destination_page') {
        cms_content = true;
        break;
      }
    }
    if (!cms_content) {
      throw new Error(`CMS content not found for: ${care_type}/${region}/${locality}`)
    }
  }

  postCareService(type, region, locality) {
    return Promise.resolve();
  }
};
