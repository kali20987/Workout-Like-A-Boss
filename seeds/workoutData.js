const { Workout } = require('../models')

const workoutData = [
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

const seedWorkout = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkout;