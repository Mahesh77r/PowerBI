const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    member_name: { type: String, default: null },
    report_title: { type: String, default: null },
    report_link: { type: String, default: null },
})

module.exports = mongoose.model("reports", ReportSchema)