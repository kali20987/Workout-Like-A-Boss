const Workout = require('./workout');
const MuscleGroup = require('./muscleGroup');
const Review = require('./review')

MuscleGroup.hasMany(Workout, {
    foreignKey: 'musclegroup_id'
})

Workout.belongsTo(MuscleGroup, {
    foreignKey: 'musclegroup_id'
})

module.exports = { MuscleGroup, Workout, Review };


