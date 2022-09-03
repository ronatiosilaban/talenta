const express = require('express')
const router = express.Router()

const { addMember, getMembers, getMember, updateMember, deleteMember } = require('../controllers/member')




router.post('/member', addMember)
router.get('/members', getMembers)
router.get('/member/:id', getMember)
router.patch('/member/:id', updateMember)
router.delete('/member/:id', deleteMember)




module.exports = router