const Job = require("../../models/Job");

module.exports = async (req, res) => {
  const filter = req.query.filter;
  try {
    let { page, size } = req.query;
    if (!page) {
      page = 1;
    }
    if (!size) {
      size = 4;
    }

    const limit = parseInt(size);
    const skip = (page - 1) * size;

    let jobs = filter
      ? await Job.find({ workType: filter })
      : await Job.find().limit(limit).skip(skip);
    return res.status(200).send({page ,size , data:jobs});
  } catch (err) {
    return res.status(500).send({ errorMsg: err.message });
  }
};
