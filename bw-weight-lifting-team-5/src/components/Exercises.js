import React, { useState } from 'react'
import Exercise from './Exercise';

import { workouts, exercises } from './ExerciseData';
const initialExercise = {

    exerciseName: '',
    reps: 0,
    bodyPart: '',
    id: 0

}
const Exercises = () => {

    const [editing, setEditing] = useState(false);
    const [exerciseToEdit, setExerciseToEdit] = useState(initialExercise)

    const [makeNewExercise, setMakeNewExercise] = useState(false)
    const [exerciseToAdd, setExerciseToAdd] = useState(initialExercise)

    let [myExercises, setMyExercises] = useState(exercises[1])

    // delete
    const deleteExercise = exercise => {

        console.log('delete exercise', exercise)
        console.log(myExercises)
        setMyExercises(myExercises.filter(exer => exer.id !== exercise.id))
    }

    /// edit
    //////
    const editExercise = (exercise) => {
        console.log('edit exercise', exercise)
        setEditing(true)
        setExerciseToEdit(exercise)
    }

    const saveExercise = (e, exercise) => {
        e.preventDefault()
        console.log('save edited exercise', exercise)
        // console.log([
        //     ...myExercises.slice(0, exercise.id),
        //     exercise,
        //     ...myExercises.slice(exercise.id + 1)
        // ])
        setMyExercises([
            ...myExercises.slice(0, exercise.id),
            exercise,
            ...myExercises.slice(exercise.id + 1)
        ])
        // setMyExercises([myExercises.spl, exercise])
    }
    //////

    // add
    const addExercise = (e, exercise) => {
        e.preventDefault()
        console.log('add exercise', exercise)
        setMyExercises([...myExercises, exercise])
        // setMakeNewExercise(true)
        // setExerciseToAdd(exercise)
    }
    // list of exercise deletable with a form to edit and a form to add new ones
    return (
        <div>
            <h1>exercise page</h1>
            {/* Read */}
            {myExercises.map((exercise, i) => (
                <Exercise
                    key={i}
                    exercise={exercise}
                    deleteExercise={deleteExercise}
                    editExercise={editExercise}/>
            ))}
            {editing && (
                <form onSubmit={(e) => {saveExercise(e, exerciseToEdit)}}>
                <legend>edit exercise</legend>
                <label>
                  exercise name:
                  <input
                    onChange={e =>
                      setExerciseToEdit({
                            ...exerciseToEdit,
                            exerciseName: e.target.value })
                    }
                    value={exerciseToEdit.exerciseName}
                  />
                </label>
                <label>
                  reps:
                  <input
                    onChange={e =>
                        setExerciseToEdit({
                        ...exerciseToEdit,
                        reps: e.target.value
                      })
                    }
                    value={exerciseToEdit.reps}
                  />
                </label>
                <label>
                  body part:
                  <input
                    onChange={e =>
                        setExerciseToEdit({
                        ...exerciseToEdit,
                        bodyPart: e.target.value
                      })
                    }
                    value={exerciseToEdit.bodyPart}
                  />
                </label>
                <div >
                  <button type="submit">save</button>
                  <button onClick={() => setEditing(false)}>cancel</button>
                </div>
              </form>
            )}
            <div>
                <button onClick={() => setMakeNewExercise(true)}>Make New Exercise</button>
            </div>

             {makeNewExercise && (
                <form onSubmit={(e) => {addExercise(e, exerciseToAdd)}}>
                <legend>edit exercise</legend>
                <label>
                  exercise name:
                  <input
                    onChange={e =>
                      setExerciseToAdd({
                            ...exerciseToAdd,
                            exerciseName: e.target.value })
                    }
                    value={exerciseToAdd.exerciseName}
                  />
                </label>
                <label>
                  reps:
                  <input
                    onChange={e =>
                        setExerciseToAdd({
                        ...exerciseToAdd,
                        reps: e.target.value
                      })
                    }
                    value={exerciseToAdd.reps}
                  />
                </label>
                <label>
                  body part:
                  <input
                    onChange={e =>
                        setExerciseToAdd({
                        ...exerciseToAdd,
                        bodyPart: e.target.value
                      })
                    }
                    value={exerciseToAdd.bodyPart}
                  />
                </label>
                <div >
                  <button type="submit">save</button>
                  <button onClick={() => setMakeNewExercise(false)}>cancel</button>
                </div>
              </form>
            )}
        </div>
    )
}
export default Exercises;