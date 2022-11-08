const express = require('express')
const router = express.Router()
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal} = require("../controllers/goalController")

router.route('/').get(getGoals).post(setGoal) // Replaces both get and post

router.route('/:id').delete(deleteGoal).put(updateGoal) // Replaces both update and delete

module.exports = router