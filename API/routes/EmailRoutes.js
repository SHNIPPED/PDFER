import express  from 'express'
import EmailController from '../controllers/EmailController.js'
import UserController from '../controllers/UserController.js';


const route = express.Router();


route.get('/Email/', EmailController.getAll);
route.get('/Email/:Title',EmailController.getOne)


export default route;