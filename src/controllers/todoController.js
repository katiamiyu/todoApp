import todos from '../models/todosDB';
import QueryController from '../helpers/db';

/**
 *  @fileoverview contoller for the various todo routes
 *  @class todoController
 *  @export todoController
 */
class todoController {
  /**
   * @param {object} request
   * @param {object} response
   * @return {object} json
   */
  static create(request, response) {
    // create new todo
    const { title, status, isCompleted } = request.body;
    const todo = {
      id: todos.length + 1,
      title,
      status,
      isCompleted,
    };
    todos.push(todo);
    return QueryController.getSuccess(response, 201, 'todo created successfully', todo);
  }

  /**
   * @param {object} request
   * @param {object} response
   * @return {object} json
   */
  static getAll(request, response) {
    // for all todos
    return QueryController.getSuccess(response, 200, 'todos retrieved successfully', todos);
  }

  /**
   * @param {object} request
   * @param {object} response
   * @return {object} json
   */
  static getById(request, response) {
    // get a single todo
    const id = parseInt(request.params.id, 10);
    let index;
    todos.map((x, i) => { if (id === x.id) { index = i; } });
    if (index >= 0) {
      return QueryController.getSuccess(response, 200, 'todo retrieved successfully', todos[index]);
    }
    return QueryController.notFoundError(response, 200, 'todo not found');
  }

  /**
   * @param {object} request
   * @param {object} response
   * @return {object} json
   */
  static edit(request, response) {
    // edit existing todo
    const id = parseInt(request.params.id, 10);
    const todo = {};
    let index;
    const { title, status, isCompleted } = request.body;
    todos.map((x, i) => { if (id === x.id) { index = i; } });
    if (index >= 0) {
      todo.id = todos[index].id;
      todo.title = title || todos[index].title;
      todo.status = status || todos[index].status;
      todo.isCompleted = isCompleted || todos[index].isCompleted;

      todos.splice(index, 1, todo);
      return QueryController.getSuccess(response, 200, 'todo updated successfully');
    }
    return QueryController.notFoundError(response, 200, 'todo not found');
  }

  /**
   * @param {object} request
   * @param {object} response
   * @return {object} json
   */
  static remove(request, response) {
    // del from existing todo
    const id = parseInt(request.params.id, 10);
    let index;
    todos.map((x, i) => { if (id === x.id) { index = i; } });
    if (index >= 0) {
      todos.splice(index, 1);
      return QueryController.getSuccess(response, 200, 'todo removed successfully');
    }
    return QueryController.notFoundError(response, 200, 'todo not found');
  }
}

export default todoController;
