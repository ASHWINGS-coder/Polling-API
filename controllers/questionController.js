const Question = require('../model/questions');
const Option = require('../model/options');

// create question
module.exports.create = async function(req,res){
    try{
        let ques = Question.create({
            question:req.body.question
        });
    
        return res.json({
            message:"question added"
        })
    }catch(err){
        return res.json({
            message:"question not added"
        }) 
    }
}

// get a question
module.exports.getQuestion = async function(req,res){
    try{
        let ques = await Question.findById({_id:req.params.id})
        if(ques){
            return res.json({
                data:ques
            });
        }else{
            return res.json({
                message:"question not found"
            }); 
        }
    }catch(err){
        return res.json({
            message:"Internal server error"
        }); 
    }
}

// add options
module.exports.addOption = async function(req,res){
    try{
        let ques = await Question.findById({_id:req.params.id})
        if(ques){
            let option = await Option.create({
                question:ques._id,
                option:req.body.option
            }) 

           await option.save();
           ques.options.push(option._id);
           await ques.save();

           return res.json({
               message:"option added",
               data:option
           })
        }
    }catch(err){
        return res.json({
            message:"intenal server error"
        })
    }
}

// delete a question
module.exports.deleteQuestion = async function(req,res){
    try{
        let ques = await Question.findOne({_id:req.params.id}).populate("options");
    if(ques){
        if(ques.options.length>0){
            let vg = false;
            for(option of ques.options){
                if(option.votes > 0 ){
                    vg = true
                }
            }
        }

        if(vg){
            return res.json({
                message:"Question cannot be deleted"
            })
        }else{
          await Option.deleteMany({question: ques._id});
          await Question.deleteOne({_id:ques._id});
          return res.json({
            message:"Question  deleted"
        })
        }
    }else{
        return res.json({
            message:"Question not found"
        })
    } 

    }catch{
        return res.json({
            message:"Internal Server error"
        })
    }
    
}