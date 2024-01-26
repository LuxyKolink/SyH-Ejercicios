const User = require('../model/user');

const getUsers = async (req, res) => {
    try {
        const users = await User.getUsers();
        if (!users) return res.status(204).json({ 'message': 'No users found' });
        res.json(users)
    } catch (err) {
        res(500).json({'msg': 'Internal server error'})
    }
}
module.exports = { getUsers }