const Job = require('../../models/Job')

// module.exports = async(req,res)=> {
//     const projectId = req.body._id
//   Job.deleteOne({_id:projectId})
//     .then((result)=>{
//       res.status(202).json(result)
//     })
//     .catch((err)=>{
//       res.json({error:err.message})
//     })
//   }

module.exports = async (req, res) => {
    const id = req.params.id;
    try {
      await Job.findByIdAndDelete(id).exec();
      const evnts = await Job.find({});
      console.log(evnts);
      return res.send({ Job: evnts });
    } catch (err) {
      console.log(err);
      return res.status(406).send({errMsg:err.message})

    }
  };
