const router = require('express').Router();
// const { AuthGoogle, AuthGitHub } = require('../controllers/Auth');
const { addReport, getReport, addMember, getMember, updateReport, deleteReport } = require('../controllers/CRUD_Report');

// 
router.post('/addreports',addReport);
router.get('/getreports',getReport);
router.get('/getreports/:id',getReport);
router.put('/updatereports/:id',updateReport);
router.delete('/deletereports/:id',deleteReport);
// 
router.post('/addmembers',addMember);
router.get('/getmembers',getMember);
router.get('/getmembers/:title',getMember);


// 
// router.get('/auth/google',AuthGoogle)
// router.get('/auth/github',AuthGitHub)
module.exports=router;
