const express = require('express')
const router = express.Router()

router.route('/jobs').get(require('../contollers/getControllers/getJobs'))
router.route('/jobs').post(require('../contollers/postControllers/postJobs'))
router.route('/jobs/:id').get(require('../contollers/getControllers/getJobsbyID'))
router.route('/jobs/update/:id').patch(require('../contollers/updateControllers/updateJobs'))
router.route('/jobs/delete/:id').delete(require('../contollers/deleteControllers/deleteJobs'))
router.route('/jobs/:id/applicants').get(require('../contollers/getControllers/getApplicants'))
router.route('/jobs/:id/applicants').get(require('../contollers/getControllers/getApplicants'))

module.exports = router