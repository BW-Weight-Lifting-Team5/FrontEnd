
// assume there is only 1 user
// workouts -> exercises
// exercise

export let workouts = [
    { id: 1, date: "2/20/2020", workout_name: "Triceps", user_id: 1 },
    { id: 2, date: "4/20/2020", workout_name: "Arms", user_id: 1 },
    { id: 3, date: "3/20/2020", workout_name: "Legs", user_id: 1 }
  ]

export let exercises = {

    1: [
            {
                exerciseName: 'test 1',
                reps: 20,
                bodyPart: 'arm',
                id: 0
            },

            {
                exerciseName: 'test 2',
                reps: 10,
                bodyPart: 'leg',
                id: 1
            },

            {
                exerciseName: 'test 3',
                reps: 35,
                bodyPart: 'hand',
                id: 2
            }
        ]

}