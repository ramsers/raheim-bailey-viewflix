const express = require('express');
const router = express.Router();
let videos = require('../sideVidData/sideVidData');


router.get('/', (req, res)=> {
    res.json(videos);
})
router.post('/', (req, res)=> {
    
})

module.exports = router;