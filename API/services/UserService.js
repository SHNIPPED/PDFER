import User from '../models/User.js'

class UserService {

    async getAll() {
        const _User = await User.find();
        return _User;
    }
}

export default new UserService();