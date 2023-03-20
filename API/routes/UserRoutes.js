import express  from 'express'
import UserController from '../controllers/UserController.js'

 
const route = express.Router();


route.get('/User', UserController.getAll);


export default route;