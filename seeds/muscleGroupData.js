const { MuscleGroup } = require('../models');

const muscleGroupData = [
    {
        exerciseTitle: 'Hip Trusts',
        instructions: `Place yourself beneath the barbell, with a platform behind you, with the edge just beneath your shoulder blades. With the barbell sitting on your hips, press through your heels and lift your hips, so that your knees, hips, and shoulders are in a straight line. Lower your hips and repeat.`,
        workout_id: 1
    },
    {
        exerciseTitle: 'Romanian DeadLift',
        instructions: `Start from a standing position, with either a barbell or dumbells in each hand. Slowly hindge your hips back while keeping your back straight and the weight directly against your legs. Once your hips are fully hidged back, drive through your glutes back into a standing position.`,
        workout_id: 1
    },
    {
        exerciseTitle: 'Bulgarian Spilt Squad',
        instructions: '1. Place a step or a box behind you and stand up tall.Position your right foot on top of the step, bend your knees and lower the hips until your left thigh is parallel to the floor. Return to the starting position and repeat. Switch legs..',
        workout_id: 1
    },
    {
        exerciseTitle: 'walking Lunges',
        instructions: `Step forward with your right leg, putting the weight into your heel. Bend the right knee, lowering down so that it's parallel to the floor in a lunge position. Pause for a beat. Without moving the right leg, move your left foot forward, repeating the same movement on the left leg.`,
        workout_id: 1
    },
    {
        exerciseTitle: 'Hamstring Curls',
        instructions: ``,
        workout_id: 1
    },
    {
        exerciseTitle: 'Bench Press',
        instructions: ``,
        workout_id: 1
    },  
    {
        exerciseTitle: 'Overhead Press',
        instructions: ``,
        workout_id: 1
    },
    {
        exerciseTitle: 'Lateral Raises',
        instructions: ``,
        workout_id: 1
    },
    {
        exerciseTitle: 'Front Raises',
        instructions: ``,
        workout_id: 1
    },
    {
        exerciseTitle: 'Overhead Tri Extensions',
        instructions: ``,
        workout_id: 1
    },
    {
        exerciseTitle: 'Front Squad',
        instructions: ``,
        workout_id: 1
    },
    {
        exerciseTitle: 'Goblet Squat',
        instructions: ``,
        workout_id: 1
    },
    {
        exerciseTitle: 'Quad Extensions',
        instructions: ``,
        workout_id: 1
    },   
    {
        exerciseTitle: 'Calf Raises',
        instructions: ``,
        workout_id: 1
    },   
    {
        exerciseTitle: 'Lunges',
        instructions: ``,
        workout_id: 1
    },    
    {
        exerciseTitle: 'Revers Curls',
        instructions: ``,
        workout_id: 1
    },    
    {
        exerciseTitle: 'Bent Over Rows',
        instructions: ``,
        workout_id: 1
    },   
    {
        exerciseTitle: 'Pull Ups',
        instructions: ``,
        workout_id: 1
    },    
    {
        exerciseTitle: 'Lat Pull Downa',
        instructions: ``,
        workout_id: 1
    },    
    {
        exerciseTitle: 'Seated Rows',
        instructions: ``,
        workout_id: 1
    },    
    {
        exerciseTitle: 'Russian Twists',
        instructions: ``,
        workout_id: 1
    },    
    {
        exerciseTitle: 'Burpees',
        instructions: ``,
        workout_id: 1
    },    
    {
        exerciseTitle: 'Mountain Climbers',
        instructions: ``,
        workout_id: 1
    },   
    {
        exerciseTitle: 'Jump Rope',
        instructions: ``,
        workout_id: 1
    },    
    {
        exerciseTitle: 'Incline Walk',
        instructions: ``,
        workout_id: 1
    },  
    
]

const seedMuscleGroupData = () => MuscleGroup.bulkCreate(muscleGroupData)

module.exports = seedMuscleGroupData;
