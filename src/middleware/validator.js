import { validationResult } from 'express-validator';

/**
 *  @fileoverview class to validate request
 *  @class validator
 *  @export Validator
 */
class Validator {
  /**
   *  @param {object} request
   *  @param {object} response
   *  @callback {function} next
   *  @return {string} errors
   */
  static validatateError(request, response, next) {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    next();
  }
}

export default Validator;
