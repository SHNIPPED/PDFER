import Email from '../models/Email.js'
import User from '../models/User.js';

class EmailService {
    async getAll() {
        const _Email = await Email.find();
        return _Email;
    }

    async getOne(Title) {
        if (!Title) {
            throw new Error('не найдена почта');
        }
        const _Email = await Email.findOne({Title:Title});
        if(_Email !=null){
            const _User = await User.find({Email:_Email})
            return _User;
        }
        else{

            res.status(500);
        }
    }
}

export default new EmailService();