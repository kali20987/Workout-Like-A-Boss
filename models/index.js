const Workout = require('./workout');
const MuscleGroup = require('./muscleGroup');

Workout.hasMany(MuscleGroup, {
    foreignKey: 'workout_id'
})

MuscleGroup.belongsTo(Workout, {
    foreignKey: 'workout_id'
})

module.exports = { Workout, MuscleGroup };