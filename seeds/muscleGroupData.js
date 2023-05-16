const { MuscleGroup } = require('../models');


const muscleGroupData = [
    {
        exerciseTitle: 'Hip Trusts',
        instructions: `Place yourself beneath the barbell, with a platform behind you, with the edge just beneath your shoulder blades. With the barbell sitting on your hips, press through your heels and lift your hips, so that your knees, hips, and shoulders are in a straight line. Lower your hips and repeat.`,
        workout_id: 1
    },
    {
        exerciseTitle: 'Romanian Deadlift',
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
        exerciseTitle: 'Front Squat',
        instructions: `Position barbell in a squat rack at about  collarbone height. Once close to the barbell position your feet just outside of shoulder-width with your toes pointed slightly outward. Safely set barbell on shoulders while grabing the barbell with index fingers to prevent it from sliding forward. Elbows should be pointing high and forward. Squat down slowly until you reach the crease of your hip. Using your legs strength push up to stand  back up keeping the barbell on you shoulders and a straight back. `,
        workout_id: 1
    },
    {
        exerciseTitle: 'Goblet Squat',
        instructions: `hold the weight in front of your chest with both hands. As you squat down, your elbows will track between your knees while the weight follows`,
        workout_id: 1
    },
    {
        exerciseTitle: 'Quad Extensions',
        instructions: `Adjust machine to you can sit with your back flat against the support and your knees bent 90 degrees.Hold the weight in front of your chest with both hands. As you squat down, your elbows will track between your knees while the weight follows.`,
        workout_id: 1
    },   
    {
        exerciseTitle: 'Standing Calf Raises',
        instructions: `hold a dumbbell in each hand and stand with your feet about shoulder-width apart. Let your arms hang straight below your shoulders. Rise up onto your toes, then slowly return to the starting position. `,
        workout_id: 1
    },   
    {
        exerciseTitle: 'Forward Lunges',
        instructions: `start by standing upright with your feet slightly apart, then take a large step forward. Lower your body until your front thigh is parallel to the floor. Your front knee stays over your toes. Next, press up through your front heel to return to a standing position.`,
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

