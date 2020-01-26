import { check } from 'express-validator';

const valTodo = [
  check('title', 'title can not be empty').not().isEmpty()
    .isLength({ max: 200 }).withMessage('title should be less than 200 chars'),
  check('status').optional(),
];

export default valTodo;