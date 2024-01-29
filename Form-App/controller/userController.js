const User = require('../model/user');

const getUsers = async (req, res) => {
    try {
        const users = await User.getAll();
        if (!users) return res.status(204).json({ 'message': 'No users found' });
        res.json(users)
    } catch (err) {
        res(500).json({'message': 'Internal server error'})
    }
}

const getUserById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (!id) res.status(400).json({ 'message': 'User ID is required.' });
        const user = await User.getById(id);
        if (!user) res.status(204).json({'error': `No employee matches ID ${id}.`})
        res.json(user)
    } catch (err) {
        res(500).json({'message': 'Internal server error'})
    }
}

const createNewUser = async (req, res) => {
    try {
        const userBody = req.body

        const newUser = await User.create(userBody) 
        if (!newUser) {
            res.status(400).json({ 'error': 'Create user failure' })
        } else {
            res.status(200).json({ 'succes': `New user ${userBody.name} created` })
        }
    } catch (err) {
        res(500).json({'message': 'Internal server error'})
    }
}

module.exports = { 
    getUsers,
    getUserById,
    createNewUser
}
