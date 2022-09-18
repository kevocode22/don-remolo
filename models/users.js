const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true },
    password: [{ type: String, required: true }],
    from: [{ type: String, required: true }],
    uniqueString: { type: String, required: true },
    verification: { type: Boolean, required: true },
    rol: {
        type: String, enum: ['miembro', 'admin'], default: 'miembro'
    },
})

const User = mongoose.model('users', userSchema)

module.exports = User