import todos from '../models/todosDB'


class todoController {

  /**
   * @param {object} request
   * @param {object} response
   * @return {object} json
   */
  static create(request, response) {
    // create new todo
  }

  /**
   * @param {object} request
   * @param {object} response
   * @return {object} json
   */
  static getAll(request, response) {
    // for all todos
    return response.status(200).json({
      status: 200,
      message: 'todos retrieved successfully',
      data: todos,
    })
  }

  /**
   * @param {object} request
   * @param {object} response
   * @return {object} json
   */
  static getById(request, response) {
    // get a single todo
  }

  /**
   * @param {object} request
   * @param {object} response
   * @return {object} json
   */
  static edit(request, response) {
    // edit existing todo
  }

  /**
   * @param {object} request
   * @param {object} response
   * @return {object} json
   */
  static remove(request, response) {
    // del from existin todo
  }
}

export default todoController;