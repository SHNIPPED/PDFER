import QuantumService from "../services/QuntumService.js";

class QuantumController{


	async getAll(req, res) {
		try {
		   const Quantum = await QuantumService.getAll();
		   res.json(Quantum);
	   } catch (e) {
		   res.status(500).json(e);
	   }
   }

    async getOne(req, res) {
		try {
			const  Quantum = await QuantumService.getOne(req.params._id);
			res.json(Quantum);
		} catch (e) {
			res.status(500).json(e);
		}
	}
}
export default new QuantumController()