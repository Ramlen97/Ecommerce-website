const path=require('path');

const rootDir=require('../util/path.js');

exports.postSucces=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactussubmit.html'));
}