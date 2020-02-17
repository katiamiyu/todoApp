/**
 *  @fileoverview file to query database
 *  @class QueryController
 *  @export QueryController
 */
class QueryController {
  /**
   *  @param {object} response
   *  @param {string} status
   *  @param {string} message
   *  @param {object} data
   *  @returns json
   */
  static getSuccess(response, status, message, data) {
    // return a success message
    return response.status(status).json({ status, message, data });
  }

  /**
   * @param {object} response
   * @param {string} status
   * @param {string} error
   * @returns json
   */
  static notFoundError(response, status, error) {
    // return not found message
    return response.status(status).json({ status, error });
  }
}

export default QueryController;
