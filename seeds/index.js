const sequelize = require('../config/connection');
const seedWorkout = require('./workoutData');
const seedMuscleGroupData = require('./muscleGroupData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedMuscleGroupData();
    await seedWorkout();
    process.exit(0);
};

seedAll();