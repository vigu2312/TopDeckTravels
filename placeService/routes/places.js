const express = require('express');
const router  = express.Router();
const Place = require('../models/Place'); 


router.get('/' ,async (req,res) => {
    try{
        console.log("placeName");
        const places = await Place.find();
        res.send(places);
    }
    catch(error){
        res.json({message:error});

    }
});

router.get('/:placeName' ,async (req,res) => {
    try{

        console.log(req.params.placeName);
        const place = await Place.find({name: req.params.placeName});
        console.log(place);
        res.send(place);
    }
    catch(error){
        res.json({message:error});

    }
});
router.get('/byId/:Id' ,async (req,res) => {
    try{

        console.log(req.params.Id);
        const place = await Place.findById(req.params.Id)
        console.log(place);
        res.send(place);
    }
    catch(error){
        res.json({message:error});

    }
});


module.exports = router;