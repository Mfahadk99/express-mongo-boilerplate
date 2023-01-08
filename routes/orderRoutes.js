import express from 'express';
import { authenticateUser, authorizePermissions } from '../middleware/authentication.js';

const router = express.Router();
import { getAllOrders, getSingleOrder, getCurrentUserOrders, createOrder, updateOrder } from '../controllers/orderController.js';
router
  .route('/')
  .post(authenticateUser, createOrder)
  .get(authenticateUser, authorizePermissions('admin'), getAllOrders);

router.route('/showAllMyOrders').get(authenticateUser, getCurrentUserOrders);

router
  .route('/:id')
  .get(authenticateUser, getSingleOrder)
  .patch(authenticateUser, updateOrder);

export default router;
