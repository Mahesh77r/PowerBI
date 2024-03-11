const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    member_name: { type: String, default: null },
    member_email: { type: String, default: null },
    member_password: { type: String, default: null },
})

module.exports = mongoose.model("members", MemberSchema)