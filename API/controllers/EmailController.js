import EmailService from "../services/EmailService.js";

class EmailController{

    async getAll(req, res) {
         try {
            const Email = await EmailService.getAll();
            res.json(Email);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res) {
		try {
			const Email = await EmailService.getOne(req.params.Title);
			res.json(Email);
		} catch (e) {
			res.status(500).json(e);
		}
	}

}

export default new EmailController();