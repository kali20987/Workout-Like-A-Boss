const router = require('express').Router();
const { MuscleGroup, Workout } = require('../../models');

// GET all MuscleGroup for homepage
router.get('/', async (req, res) => {
  try {
    const dbMuscleGroupData = await MuscleGroup.findAll();
    const muscleGroups = dbMuscleGroupData.map((muscleGroup) =>
    muscleGroup.get({ plain: true }));

    console.log(muscleGroups);

    res.render('homepage', {muscleGroups});

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET one MuscleGroup's set of workouts
router.get('/workout/:id', async (req, res) => {
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
    const muscleGroup = dbMuscleGroupData.get({ plain: true });
    res.render('workout', { muscleGroup });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;