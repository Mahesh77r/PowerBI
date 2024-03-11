const MemberSchema = require("../models/MemberSchema");
const ReportSchema = require("../models/ReportSchema");

const getReport = async (req, res) => {
    const member_id = req.params.id;
  try {
    // for filter data
    if (member_id) {
      const reports = await ReportSchema.find({
        $or: [
          { member_id: member_id },
          { _id: member_id }
          // Additional conditions can be added as needed
        ]
      }).populate('member_id');
      
      res.status(200).json({
        success: true,
        data: reports,
      });
    }
    // unfilter data
    else {
      const reports = await ReportSchema.find()

      res.status(200).json({
        success: true,
        data: reports,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: `Error fetching  reports ${error}` });
  }
};

const updateReport = async (req, res) => {
  try {
    const reportData = req.body;

    // Find and update the artist by ID
    const updateReport = await ReportSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          report_title: reportData.report_title,
          report_link: reportData.report_link,
        },
      },
      { new: true } // Return the updated document
    );

    if (! updateReport) {
      return res.status(404).json({ success: false, error: "Report not found" });
    }

    // Check if the artist name is being updated and if it conflicts with an existing artist
    if (reportData.artist_name && reportData.artist_name !== reportData.report_title) {
      const reportTitleConflict = await ReportSchema.findOne({
        report_title: reportData.report_title,
          report_link: reportData.report_link,
      });

      if (reportTitleConflict) {
        return res.status(202).json({ success: false, error: "Report title already exists" });
      }
    }

    return res.status(200).json({
      success: true,
      data: updatedArtist,
      message: "Report updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: `Error updating artist: ${error}` });
  }
};

const deleteReport = async (req, res) => {
  try {
    // Extract artist ID from the request parameters
    const reportId = req.params.id;

    // Find the artist by ID
    const reportToDelete = await ReportSchema.findById(reportId);
    
    if (!reportToDelete) {
      return res.status(404).json({ success: false, error: "Report not found" });
    }
    // Perform the delete operation
    await artistToDelete.deleteOne();


    return res.status(200).json({
      success: true,
      data: {},
      message: "Report deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: `Error deleting report: ${error}` });
  }
};

const addReport = async (req, res) => {
    try {
        const reportBody = req.body;
        
        
        const newReport = new ReportSchema({
            member_id: reportBody.member_id, // Corrected field name
            report_title: reportBody.report_title,
            report_link: reportBody.report_link,
        });

        await newReport.save();

        return res.status(200).json({
            success: true,
            data: newReport,
            message: "Report added successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error adding report data ${error}`,
        });
    }
};

const addMember= async (req, res) => {
  try {
    const memberData = req.body ;

    const newMember = new MemberSchema({
        member_name:memberData.member_name,
        member_email:memberData.member_email,
        member_password:memberData.member_password
    })
    await newMember.save();
    return res.status(200).json({
        success: true,
        data: newMember,
        message: "Member added successfully",
      });
  } catch (error) {
    return res.status(500).json({
        success: false,
        error :`Error adding Member ${error}`      });
  }

};

const getMember = async (req, res) => {
  const member_name = req.params.name;

try {
  // for filter data
  if (member_name) {
    const member = await MemberSchema.find({ member_name: member_name })

    res.status(200).json({
      success: true,
      data: member,
    });
  }
  // unfilter data
  else {
    const reports = await MemberSchema.find()

    res.status(200).json({
      success: true,
      data: reports,
    });
  }
} catch (error) {
  console.error(error);
  res.status(500).json({ success: false, error: `Error fetching  reports ${error}` });
}
};
module.exports = { addReport, getReport ,addMember, getMember, updateReport, deleteReport};