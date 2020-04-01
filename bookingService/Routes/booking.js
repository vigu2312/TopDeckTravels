const express=require('express');
const router=express.Router();
const Booking=require('../Models/Booking');
const bodyParser=require('body-parser');

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = dd + '-' + mm + '-' + yyyy;

router.post('/getBooking', async(req,res)=>{
fare=parseInt(req.body.fare,10);    
tax=(0.15)*fare;
amount=tax+fare;
const booking=new Booking({
    name:req.body.name,
    email:req.body.email,
    travel_date:req.body.travel_date,
    travel_time:req.body.travel_time,
    booking_date:today,
    from_place:req.body.from_place,
    to_place:req.body.to_place,
    fare:fare,
    tax:tax,
    amount:amount
  
});
try{
   const savedPost= await booking.save()  
    res.json(savedPost);
    
}
catch(error){
    res.json({message:error}); 
}


});



module.exports=router;
