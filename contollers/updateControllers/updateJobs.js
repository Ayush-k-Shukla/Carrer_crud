const Job = require("../../models/Job");

module.exports = async (req, res) => {
  const id = req.params.id;
  const event = req.body;

  try {

    const job = new Job(event.job);
    const e = await Job.findByIdAndUpdate(id, job);
    // const evnts = await Job.find({});
    console.log(e);
    // return res.send({ event: e });
  } catch (err) {
    console.log(err);
    return res.status(406).send({ errMsg: err.message });
  }
};
