const ReportSchema = require("../models/ReportSchema");

const getReport = async (req, res) => {
    const report_title = req.params.title;

  try {
    // for filter data
    if (report_title) {
      const reports = await ReportSchema.find({ report_title: report_title })

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

// const updateArtist = async (req, res) => {
//   try {
//     const data = req.body;

//     // Find and update the artist by ID
//     const updatedArtist = await ReportSchema.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           artist_name: data.artist_name,
//           artist_contact: data.artist_contact,
//           artist_address: data.artist_address,
//           state: data.state,
//           city: data.city,
//           admin_name: data.admin_name,
//           path: data.imagePath ,
//         },
//       },
//       { new: true } // Return the updated document
//     );

//     if (!updatedArtist) {
//       return res.status(404).json({ success: false, error: "Artist not found" });
//     }

//     // Check if the artist name is being updated and if it conflicts with an existing artist
//     if (data.artist_name && data.artist_name !== updatedArtist.artist_name) {
//       const artistNameConflict = await ReportSchema.findOne({
//         artist_name: data.artist_name,
//         dest_name: data.dest_name,
//       });

//       if (artistNameConflict) {
//         return res.status(202).json({ success: false, error: "Artist name already exists" });
//       }
//     }

//     return res.status(200).json({
//       success: true,
//       data: updatedArtist,
//       message: "Artist updated successfully",
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ success: false, error: `Error updating artist: ${error}` });
//   }
// };

// const deleteArtist = async (req, res) => {
//   try {
//     // Extract artist ID from the request parameters
//     const artistId = req.params.id;

//     // Find the artist by ID
//     const artistToDelete = await ReportSchema.findById(artistId);
    
//     if (!artistToDelete) {
//       return res.status(404).json({ success: false, error: "Artist not found" });
//     }

//     try {
//         await deleteFileByUrl(artistToDelete.path[0],'artists');
//     } catch (error) {
//       return res.status(400).json({ success: false, error: `Image not deleted : ${error}` });
//     }
//     // Perform the delete operation
//     await artistToDelete.deleteOne();


//     return res.status(200).json({
//       success: true,
//       data: {},
//       message: "Artist deleted successfully",
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ success: false, error: `Error deleting artist: ${error}` });
//   }
// };

const addReport = async (req, res) => {
  try {
    const reportData = req.body ;

    const newReport = new ReportSchema({
        member_name:reportData.member_name,
        report_title:reportData.report_title,
        report_link:reportData.report_link
    })
    newReport.save();
    return res.status(200).json({
        success: true,
        data: newReport,
        message: "Product added successfully",
      });
  } catch (error) {
    return res.status(500).json({
        success: false,
        error :`Error adding report data ${error}`      });
  }

};

module.exports = { addReport, getReport };