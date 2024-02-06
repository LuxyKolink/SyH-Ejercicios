const User = require('../model/user');

const getUsers = async (req, res) => {
    try {
        const page = parseInt(req.body.page)
        const users = await User.getAll(page);
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
        const {
            name,
            phone,
            email,
            psw
        } = req.body

        if (!name || !phone || !email || !psw) {
            res.status(400).json({ 'error': 'Missing required fields' });
        }

        const newUser = await User.create(req.body) 
        if (!newUser) {
            res.status(400).json({ 'error': 'Create user failure' })
        } else {
            res.status(200).json({ 'succes': `New user ${name} created` })
        }
    } catch (err) {
        res(500).json({'message': 'Internal server error'})
    }
}

const updateUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        if (!id) res.status(400).json({ 'message': 'User ID is required.' });

        const {
            name,
            address,
            phone,
            email,
        } = req.body

        const oldUser = await User.getById(id)

        const newUser = await User.update({
            name: name || oldUser.name,
            address: address || oldUser.address,
            phone: phone || oldUser.phone,
            email: email || oldUser.email
        }, id)

        if (!newUser) {
            res.status(400).json({ 'error': 'Update user failure' })
        } else {
            res.status(200).json({ 'succes': `User ${newUser.name} updated` })
        }
    } catch (err) {
        console.error(err);
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (!id) res.status(400).json({ 'message': 'User ID is required.' });
        const user = await User.getById(id);
        if (!user) res.status(204).json({'error': `No employee matches ID ${id}.`})
        const result = await User.deleteOne(user.id)
        res.json(result)
    } catch (err) {
        res(500).json({'message': 'Internal server error'})
    }
}

module.exports = { 
    getUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser
}
