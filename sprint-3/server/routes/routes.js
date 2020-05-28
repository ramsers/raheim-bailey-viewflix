const express = require('express');
const router = express.Router();
let videosData = require('../sideVidData/sideVidData');


router.get('/', (req, res)=> {
    res.json(videosData);
})
router.get('/:vidId', (req, res)=> {
    return res.status(200).json((videosData).filter(video => {
        return video.id === req.params.vidId;
    }))
})

// router.get('/:id', (req))

module.exports = router;