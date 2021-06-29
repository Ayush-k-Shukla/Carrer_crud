const Job = require('../../models/Job')

module.exports = async (req, res) => {
    const id = req.params.id;
    try {
      await Job.findByIdAndDelete(id).exec();
      const evnts = await Job.find({});
      return res.status(202).send({ Job: evnts });
    } catch (err) {
      return res.status(406).send({errMsg:err.message})

    }
  };
