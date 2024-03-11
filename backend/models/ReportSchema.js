// ReportSchema.js
const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    report_title: { type: String, default: null },
    report_link: { type: String, default: null },
    member_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'members', // Assuming you have a Member model
        required: true,
    },
});

module.exports = mongoose.model("reports", ReportSchema);
