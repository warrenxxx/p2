'use strict'
var api=require('express').Router()
    ,UserController=require('./account.d.controller')
//    ,mdAuth=require('../midelwares/authenticate')
;

api.post("/",UserController.insert);
api.put("/",UserController.update);
api.get("/",UserController.findAll);
api.get("/:id",UserController.findById);
api.delete('/:id',UserController.remove);
module.exports=api;
