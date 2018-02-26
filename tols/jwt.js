var jwt=require('jwt-simple'),
    moment=require('moment'),
    User=require('../models/user'),
    clave=require('../config/global').clavesecreta;


module.exports.createToken=function(obj){
    var payload=User.create(obj);
    if(payload["error"])
        return payload;

    console.error(obj,payload);
    payload.password=undefined;
    payload["iat"]=moment().unix();
    payload["exp"]=moment().add(30,'days').unix();

    return jwt.encode(payload,clave);
};

