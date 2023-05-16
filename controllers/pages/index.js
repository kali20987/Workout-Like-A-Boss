const router = require('express').Router();
const {MuscleGroup, Workout } = require('../../models');

// GET all MuscleGroup for homepage
router.get('/', async (req, res) => {
  try {
    const dbMuscleGroupData = await MuscleGroup.findAll({
      include: [
        {
          model: Workout,
          attributes: ['exerciseTitle'],
        },
      ],
    });

    const MuscleGroups = dbMuscleGroupData.map((MuscleGroup) =>
    MuscleGroup.get({ plain: true })
    );

    res.render('homepage', {
      MuscleGroups,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one MuscleGroup
router.get('/MuscleGroup/:id', async (req, res) => {
  try {
    const dbMuscleGroupData = await MuscleGroup.findByPk(req.params.id, {
      include: [
        {
          model: Workout,
          attributes: [
            'exerciseTitle',
            'instructions',
          ],
        },
      ],
    });

    const MuscleGroup = dbMuscleGroupData.get({ plain: true });
    res.render('MuscleGroup', { MuscleGroup });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Workout
router.get('/Workout/:id', async (req, res) => {
  try {
    const dbWorkoutData = await Workout.findByPk(req.params.id);

    const Workout = dbWorkoutData.get({ plain: true });

    res.render('Workout', { Workout });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
