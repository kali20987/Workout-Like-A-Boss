const sequelize = require('../config/connection');
const seedWorkoutData = require('./workoutData');
const seedMuscleGroupData = require('./muscleGroupData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedMuscleGroupData();
    await seedWorkoutData();
    process.exit(0);
};

seedAll();