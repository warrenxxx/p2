var Account=require('./account.b.repository').AccountCruds,
    ObjectId=require('mongoose').Types.ObjectId;
module.exports.insert=function (req,res) {
    var account=new Account(req.body);
    account.save(e=>{
        if(e)
            res.status(500).send({"error":"no inserto en la bd","error2":e});
        else
            res.status(200).send({"ok":"account insertado!!"});
    });
};
module.exports.update=function (req,res) {
    var account=new Account(req.body);

    Account.findByIdAndUpdate(req.body._id,account,
        (e,data)=>{
            if(e) res.status(500).send({"error":"no inserto en la bd","error2":e});
            else
                if(data) res.status(200).send(data);
                else res.status(404).send(data)
        });
};


module.exports.findAll=function (req,res) {
    Account.find((e,data)=>{
        if(e)
            res.status(500).send({"error":"no inserto en la bd","error2":e});
        else
            res.status(200).send(data);
    });
};
module.exports.findById=function (req,res) {
    var userId=req.params.id;
    Account.findById(userId,
        (e,data)=>{
            if(e) res.status(500).send({"error":"no inserto en la bd","error2":e});
            else
            if(data) res.status(200).send(data);
            else     res.status(404).send(data);
        }
    );
};
module.exports.remove=function (req,res) {
    var userId=req.params.id;
    Account.findByIdAndRemove(userId,
        (e,data)=>{
            if(e) res.status(500).send({"error":"no inserto en la bd","error2":e});
            else
            if(data) res.status(200).send(data);
            else     res.status(404).send(data);
        }
    );
};
