const router = require('express').Router();
const { addReport, getReport } = require('../controllers/CRUD_Report');


router.post('/addreports',addReport);
router.get('/getreports',getReport);
router.get('/getreports/:title',getReport);

module.exports=router;
