const model = require('../model/delad');

const DelAd = async (res, req) => {
    try{
        const query = model(req.body);
        res.json({message : "Deleted Ad"}).status(200);
    }
    catch(err){
        res.json({message : "Error on the sevrer-side"}).status(500);
    }
};

module.exports = DelAd;
