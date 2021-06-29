const Job = require('../../models/Job')

module.exports = async(req,res) => {
  const jobid = req.params.id
  try {
    const result = await Job.findById(jobid,{'applications':1})
    return res.status(200).send(result)
  } catch(err) {
    return res.status(500).send({ errorMsg: err.message })
  }
}