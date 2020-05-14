const Question = require('../model/questions');
const Option = require('../model/options');

// adding vote
module.exports.addVote = async function(req,res){
    try{
        let option = await Option.findOne({_id:req.params.id});
        if(option){
            let cv = option.votes;
            option.votes = cv + 1;

            await option.save();

            return res.json({
                message:"added vote"
            })
        }else{
            return res.json({
                message:"option not found"
            }) 
        }

    }catch(err){
        return res.json({
            message:"internal server error"
        })
    }
}

// delete an option
module.exports.deleteOption = async function(req,res){
    try{
        let option = await Option.findOne({_id:req.params.id})
        if(option){
            if(option.votes > 0){
                return res.json({
                    message:"option cannot be deleted as it has votes"
                })
            }
            await Option.deleteOne({_id:req.params.id});
            return res.json({
                message:"Deleted Option Successfully"
            })
        }

    }catch{
        return res.json({
            message:"Internal server error"
        })
    }
}
