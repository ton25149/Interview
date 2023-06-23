
let mongoose = require('mongoose');
    express = require('express');
    router = express.Router();



    let ticketSchema = require('../models/Ticket')

    router.route('/create-ticket').post((req, res, next) => {

    ticketSchema.create(req.body, (error, data) => {

        if (error) {
            return next(error);
        }else{
            console.log(data);
            res.json(data);
        }
    })
    })

    router.route('/').get((req , res) => {
        ticketSchema.find((error, data) =>{
            if (error) {
                return next(error);
        }else {
            res.json(data);
        }
    })
})

// get ticket
router.route('/edit-ticket/:id').get((req, res) => {
    ticketSchema.findById(req.params.id, (error, data)=>{
        if (error) {
            return next(error);
    }else {
        res.json(data);
    }

    })
})
//update ticket
router.route('/update-ticket/:id').put((req, res, next) => {
    ticketSchema.findByIdAndUpdate(req.params.id, {
         $set: req.body 
    },(error, data) => {
        if (error){
            return next(error);
            console.log(error)
        }else{
            res.json(data)
            console.log('Ticket update Successfully')

        }
    })
})

//Delete Ticket
router.route('/delete-ticket/:id').delete((req, res, next) => {
    ticketSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error){
            return next(error);
        }else{
            res.status(200).json({
                msg: data
            })

        }
    })
});

module.exports = router;