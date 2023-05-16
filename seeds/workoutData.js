const { Workout } = require('../models');

const workoutData = [
    {
        exerciseTitle: 'Hip Trusts',
        instructions: "Place yourself beneath the barbell, with a platform behind you, with the edge just beneath your shoulder blades. With the barbell sitting on your hips, press through your heels and lift your hips, so that your knees, hips, and shoulders are in a straight line. Lower your hips and repeat.", 
        musclegroup_id: 1
    },
    {
        exerciseTitle: 'Romanian Deadlift',
        instructions: `Start from a standing position, with either a barbell or dumbells in each hand. Slowly hindge your hips back while keeping your back straight and the weight directly against your legs. Once your hips are fully hidged back, drive through your glutes back into a standing position.`,
        musclegroup_id: 1
    },
    {
        exerciseTitle: 'Bulgarian Spilt Squad',
        instructions: '1. Place a step or a box behind you and stand up tall.Position your right foot on top of the step, bend your knees and lower the hips until your left thigh is parallel to the floor. Return to the starting position and repeat. Switch legs..',
        musclegroup_id: 1
    },
    {
        exerciseTitle: 'walking Lunges',
        instructions: `Step forward with your right leg, putting the weight into your heel. Bend the right knee, lowering down so that it's parallel to the floor in a lunge position. Pause for a beat. Without moving the right leg, move your left foot forward, repeating the same movement on the left leg.`,
        musclegroup_id: 1
    },
    {
        exerciseTitle: 'Hamstring Curls',
        instructions: `Stand with your feet hip-width apart. Place your hands on your waist or on a chair for balance. Slowly bend your right knee, bringing your heel toward your butt. Keep your thighs parallel. Slowly lower your foot. Complete 12 to 15 reps. Repeat with the other leg.`,
        musclegroup_id: 1
    },
    {
        exerciseTitle: 'Bench Press',
        instructions: `Lie on your back on a flat bench. Press your feet firmly into the ground and keep your hips on the bench throughout the entire movement. Keep your core engaged and maintain a neutral spine position throughout the movement. Slowly lift the bar or dumbbells off the rack, if using.`,
        musclegroup_id: 2
    },  
    {
        exerciseTitle: 'Overhead Press',
        instructions: `While keeping your entire body tight, press the bar overhead. Keep the bar as close to your face (without hitting it) as possible. Once the bar passes your forehead, move your body back under the bar by driving your torso forward and back into a standing position.`,
        musclegroup_id: 2
    },
    {
        exerciseTitle: 'Lateral Raises',
        instructions: `Grab a set of dumbbells and stand straight. With your palms facing down, lift the dumbbells and raise your arms out to the sides. Once your elbows are at shoulder height, pause, and then slowly lower the arms back to the initial position. Repeat.`,
        musclegroup_id: 2
    },
    {
        exerciseTitle: 'Front Raises',
        instructions: `Stand with good posture and a dumbbell in each hand, by your sides. Keeping your arms straight, raise one dumbbell forwards up to shoulder height, lower it with control. Repeat on the other side and keep alternating for the duration of the exercise.`,
        musclegroup_id: 2
    },
    {
        exerciseTitle: 'Overhead Tri Extensions',
        instructions: `Stand with your feet staggered while holding a pair of dumbbells directly overhead, with your palms facing each other and the weights touching. Without moving your upper arms, lower the weights behind your head. Keep the dumbbells pressed together the whole time.`,
        musclegroup_id: 2
    },
    {
        exerciseTitle: 'Front Squat',
        instructions: `Position barbell in a squat rack at about  collarbone height. Once close to the barbell position your feet just outside of shoulder-width with your toes pointed slightly outward. Safely set barbell on shoulders while grabing the barbell with index fingers to prevent it from sliding forward. Elbows should be pointing high and forward. Squat down slowly until you reach the crease of your hip. Using your legs strength push up to stand  back up keeping the barbell on you shoulders and a straight back. `,
        musclegroup_id: 3
    },
    {
        exerciseTitle: 'Goblet Squat',
        instructions: `hold the weight in front of your chest with both hands. As you squat down, your elbows will track between your knees while the weight follows`,
        musclegroup_id: 3
    },
    {
        exerciseTitle: 'Quad Extensions',
        instructions: `Adjust machine to you can sit with your back flat against the support and your knees bent 90 degrees.Hold the weight in front of your chest with both hands. As you squat down, your elbows will track between your knees while the weight follows.`,
        musclegroup_id: 3
    },   
    {
        exerciseTitle: 'Standing Calf Raises',
        instructions: `hold a dumbbell in each hand and stand with your feet about shoulder-width apart. Let your arms hang straight below your shoulders. Rise up onto your toes, then slowly return to the starting position. `,
        musclegroup_id: 3
    },   
    {
        exerciseTitle: 'Forward Lunges',
        instructions: `start by standing upright with your feet slightly apart, then take a large step forward. Lower your body until your front thigh is parallel to the floor. Your front knee stays over your toes. Next, press up through your front heel to return to a standing position.`,
        musclegroup_id: 3
    },    
    {
        exerciseTitle: 'Revers Curls',
        instructions: `Stand up with your back straight, shoulders back, and chest lifted. Grip a set of dumbbells with your palms facing down (pronated grip) and rest the weights on the front of your thighs. Exhale and bend your elbows to lift the weights toward your shoulders. Lift the weights until you feel a complete biceps contraction.`,
        musclegroup_id: 4
    },    
    {
        exerciseTitle: 'Bent Over Rows',
        instructions: `Grab a set of dumbbells, bend your torso forward and keep your knees slightly bent.
        Pull the dumbbells toward your waistline, while squeezing your shoulder blades.
        Slowly lower the weights to the starting position. A 1-second pull, 1-second pause, 2 second down count is ideal.
        Repeat.`,
        musclegroup_id: 4
    },   
    {
        exerciseTitle: 'Pull Ups',
        instructions: `Grab a bar with a grip slightly wider than shoulder-width, with your hands facing away from you. Hang all the way down. Pull yourself up until your chin is above the bar. Slight pause. Lower yourself all the way back down.`,
        musclegroup_id: 4
    },    
    {
        exerciseTitle: 'Lat Pulldown',
        instructions: `While seated, you pull a hanging bar toward you to reach chin level, then release it back up with control for one repetition`,
        musclegroup_id: 4
    },    
    {
        exerciseTitle: 'Seated Rows',
        instructions: `Sit upright on the bench and plant your feet on the floor or foot pads, knees bent. Extend your arms and hold the handle or cable.Exhale. Inhale and slowly extend your arms, counting to 3. Complete one set of 12 to 15 reps.`,
        musclegroup_id: 4
    },    
    {
        exerciseTitle: 'Russian Twists',
        instructions: `Lie down with your legs bent at the knees. Elevate your upper body so that it creates a V shape with your thighs. Twist your torso to the right, and then reverse the motion, twisting it to the left. Repeat this movement until the set is complete.`,
        musclegroup_id: 5
    },    
    {
        exerciseTitle: 'Burpees',
        instructions: `Begin in a standing position. Position your feet shoulder-width apart. Drop into a squat. Kick your legs back into a high plank position. Lower toward the ground. Rise back to high plank. Return to a squat position. Jump!`,
        musclegroup_id: 5
    },    
    {
        exerciseTitle: 'Mountain Climbers',
        instructions: `Start with your body in a straight line and your hands slightly wider than shoulder-width apart. Bring one knee up toward the center of your stomach and then quickly alternate between legs. Continue alternating until the set is complete.`,
        musclegroup_id: 5
    },   
    {
        exerciseTitle: 'Jump Rope',
        instructions: `Hold the rope while keeping your hands at hip level. Rotate your wrists to swing the rope and jump. Jump with both feet at the same time, one foot at a time, alternating between feet, etc. Repeat until the set is complete.`,
        musclegroup_id: 5
    },    
    {
        exerciseTitle: 'Incline Walk',
        instructions: `Warmup: 5 minutes at 0% incline, walking at a normal pace. Interval 1: 3-4 minutes at 2-3% incline at a brisk pace. Rest/recovery: 1-2 minutes at 0% incline at a normal pace. Interval 2: 5 minutes at 2-3% incline at a fast pace (You should really feel the blood pumping here.)`,
        musclegroup_id: 5
    },  
    
]

const seedWorkoutData = () => Workout.bulkCreate(workoutData)

module.exports = seedWorkoutData;