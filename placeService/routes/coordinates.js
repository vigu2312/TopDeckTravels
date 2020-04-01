const express = require('express');
const router  = express.Router();
const Coordinate = require('../models/Coordinate');

router.get('/' ,async (req,res) => {
    try{
        console.log("placeName");
        const places = await Coordinate.find();
        res.send(places);
    }
    catch(error){
        res.json({message:error});

    }
});

router.get('/:placeName', async (req,res) => {
    try{

        console.log(req.params.placeName);
        const query = { city : req.params.placeName}
        console.log(query);
        const coordinate = await Coordinate.find(query);
        console.log(coordinate);
        res.send(coordinate);
    }
    catch(error){
        res.json({message:error});

    }
});

module.exports = router;