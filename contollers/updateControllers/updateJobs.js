const Job = require("../../models/Job");

module.exports = async (req, res) => {
  const id = req.params.id;
  const job = req.body.job
  try {
    const result = await Job.findByIdAndUpdate(id, job);
    console.log(result);
    return res.send(result);
  } catch (err) {
    return res.status(406).send({ errMsg: err.message });
  }
};
