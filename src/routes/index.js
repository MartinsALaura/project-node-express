import express from 'express';
import { getHello, getUser } from '../controllers/helloController.js';
import { getList, createListItem, deleteListItem } from '../controllers/listController.js';

const router = express.Router();

router.get('/hello', getHello);
router.get('/user/:id', getUser);
router.get('/list', getList);
router.post('/list', createListItem);
router.delete('/list/:id', deleteListItem);

export default router;
