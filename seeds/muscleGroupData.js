const { MuscleGroup } = require('../models')

const muscleGroupData = [
    {
        muscleGroup: 'Glutes and Hamstrings'
    },
    {
        muscleGroup: 'Chest, Shoulders, and Triceps'
    },
    {
        muscleGroup: 'Quads and calves'
    },
    {
        muscleGroup: 'Back and Biceps'
    },
    {
        muscleGroup: 'Cardio and Core'
    },
];

const seedMuscleGroupData = () => MuscleGroup.bulkCreate(muscleGroupData);

module.exports = seedMuscleGroupData;