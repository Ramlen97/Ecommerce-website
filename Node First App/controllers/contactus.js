const path=require('path');

const rootDir=require('../util/path.js');

exports.getContactUsForm=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactusform.html'));
}