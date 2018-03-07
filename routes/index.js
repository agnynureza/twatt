const express = require('express')
const router = express.Router()
const {timeline,search,post} = require('../controllers/index')

router.get('/',timeline)
router.get('/:search',search)
router.post('/',post)

module.exports = router