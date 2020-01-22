import todoController from '../controllers/todoController';

const routes = (app) => {
  app.get('/api/vi/todos', todoController.getAll);

}

export default routes;