import { check } from 'express-validator';

const valTodo = [
  check('title', 'title can not be empty').not().isEmpty()
    .isLength({ max: 50 })
    .withMessage('title should be less than 50 chars'),
  check('status').optional(),
];

export default valTodo;
