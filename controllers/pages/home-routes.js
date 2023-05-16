const router = require('express').Router();
const sequelize = require('../config/connection');
const { workout, muscleGroup } = require('../models');

// GET all workout for homepage
router.get('/', async (req, res) => {
    try {
      const dbworkoutData = await  workout.findAll({
        include: [
          {
            model: muscleGroup,
            attributes: ['filename', 'description'],
          },
        ],
      });
  
      const  workouts = dbworkoutData.map((workout) =>
      workout.get({ plain: true })
      );
  
      res.render('homepage', {
        workouts,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // GET one workout
  router.get('/workout/:id', async (req, res) => {
    try {
      const dbworkoutData = await workout.findByPk(req.params.id, {
        include: [
          {
            model: muscleGroup,
            attributes: [
              'id',
              'exerciseTitle',
              'instraction',
            ],
          },
        ],
      });
  
      const workout = dbworkoutData.get({ plain: true });
      res.render('workout', { workout });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // GET one muscleGroup
  router.get('/muscleGroup/:id', async (req, res) => {
    try {
      const dbmuscleGroupData = await muscleGroup.findByPk(req.params.id);
  
      const muscleGroup = dbmuscleGroupData.get({ plain: true });
  
      res.render('muscleGroup', { muscleGroup });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
