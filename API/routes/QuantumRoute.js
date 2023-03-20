import express  from 'express'
import QuantumController from '../controllers/QuantumController.js'

const route = express.Router();

route.get('/Quantum', QuantumController.getAll);
route.get('/Quantum/:_id', QuantumController.getOne);


export default route;