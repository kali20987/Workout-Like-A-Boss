const { MuscleGroup } = require('../models');

const muscleGroupData = [
    {
        exerciseTitle: 'Hip Trusts',
        instructions: 'Place yourself beneath the barbell, with a platform behind you, with the edge just beneath your shoulder blades. With the barbell sitting on your hips, press through your heels and lift your hips, so that your knees, hips, and shoulders are in a straight line. Lower your hips and repeat.',
        workout_id: 1
    },
    {
        exerciseTitle: 'Romanian Deadlifts',
        instructions: 'Start from a standing position, with either a barbell or dumbells in each hand. Slowly hindge your hips back while keeping your back straight and the weight directly against your legs. Once your hips are fully hidged back, drive through your glutes back into a standing position.',
        workout_id: 1
    }
]

const seedMuscleGroupData = () => MuscleGroup.bulkCreate(muscleGroupData)

module.exports = seedMuscleGroupData;
