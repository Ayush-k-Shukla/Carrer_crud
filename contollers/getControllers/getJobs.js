const Job = require('../../models/Job')

module.exports = async(req,res) => {
  const filter = req.query.filter
  console.log(filter)
  try {
    let jobs = filter ? await Job.find({workType:filter}) : await Job.find()
    return res.status(200).send(jobs)
  } catch(err) {
    return res.status(500).send({ errorMsg: err.message })
  }
}