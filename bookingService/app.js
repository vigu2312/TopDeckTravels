const express=require('express');
 
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
//npm require('dotenv/config');
const cors=require('cors');


app.use(cors());
app.use(bodyParser.json());

const ticketRoute=require('./Routes/booking');

app.use('/booking',ticketRoute);

app.get('/',(req,res)=>{
    res.send('WE ARE ON THE BOOKING PAGE');
});

mongoose.connect('mongodb://3.88.249.85:27017/TourismCanada', {useNewUrlParser: true},

()=>
    console.log('DB connected')
    
);

app.listen(8080);
