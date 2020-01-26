import Validator from '..//middleware/validator'
import valTodo from '../validations/valTodo';
import todoController from '../controllers/todoController';

const routes = (app) => {
  app.get('/api/v1/todos', todoController.getAll);
  app.get('/api/v1/todos/:id', todoController.getById);
  app.put('/api/v1/todos/:id', todoController.edit);
  app.delete('/api/v1/todos/:id', todoController.remove);
  app.post('/api/v1/todos', valTodo, Validator.validatateError, todoController.create);

}

export default routes;