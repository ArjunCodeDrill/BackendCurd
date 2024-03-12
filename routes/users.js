import express from 'express';
import userSignUP from '../controllers/userSignup.js';
import addItem from '../controllers/addItem.js';
import updateItem from '../controllers/updateItem.js';
import getItems from '../controllers/getItems.js';
import deletedItem from '../controllers/deleteItem.js';
import userSign from '../controllers/userSign.js';
import auth from '../middleware/auth.js';

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/sign-up', userSignUP);
router.post('/sign-in', userSign);
router.post('/add-item', auth, addItem);
router.put('/update-item', auth, updateItem);
router.get('/get-item', auth, getItems);
router.delete('/delete-item', auth, deletedItem);








export default router;
