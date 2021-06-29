const express = require('express')
const router = express.Router()

router.route('/jobs').get(require('../contollers/getControllers/getJobs'))
router.route('/jobs').post(require('../contollers/postControllers/postJobs'))


module.exports = router