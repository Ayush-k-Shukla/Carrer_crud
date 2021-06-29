const express = require('express')
const router = express.Router()

router.route('/jobs').get(require('../contollers/getControllers/getJobs'))
router.route('/jobs').post(require('../contollers/postControllers/postJobs'))
router.route('/update/:id').patch(require('../contollers/updateControllers/updateJobs'))
router.route('/delete/:id').delete(require('../contollers/deleteControllers/deleteJobs'))


module.exports = router