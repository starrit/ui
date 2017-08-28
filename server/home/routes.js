const express = require("express");
const router = express.Router();
const statusOK = 200;

const HomeService = require("./service");
const service = new HomeService();

/**
 * @api {get} /:care_type/:region/:locality
 * @apiDescription Gets Pre-Rendered Care information page for a given type, region, locality.
 * If type/region/locality combination has no data, we return a custom 404 page.
 * If ETag sent in header is reproduced by current data, we return a 304 to indicate no change.
 * @apiGroup Care
 * @apiVersion 1.0.0
 * @apiHeader Content-Type (text/html)
 * @apiHeader ETag contains etag for matching cached content.
 * @apiParam {String} care_type Type of care facility (ie: senior-apartments)
 * @apiParam {String} region Region of care facilities (ie: Texas)
 * @apiParam {String} locality Locality of care facilities (ie: Houston)
 *
 */
router.get("/", (req, res, next) => {
  const page = service.getHomePage()
  res.status(statusOK).send(page.body);
});

export default router;
