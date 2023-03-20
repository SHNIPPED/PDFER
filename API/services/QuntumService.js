import Quantum from './../models/Quantums.js'

class QuantumService{

    async getOne(_id) {
        if (!_id) {
            throw new Error('Квантум не найден');
        }
        else{
            const _Quantum = await Quantum.findById({_id});
            return _Quantum
        }
    }
    async getAll() {
        const _Quantum = await Quantum.find();
        return _Quantum;
    }
}

export default new QuantumService()