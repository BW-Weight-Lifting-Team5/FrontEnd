import React, { useState } from 'react'
import Exercise from './Exercise';
import {
    findState,
    getContainer,
    deleteItem,
    updateItem,
    addItem,
} from './AxiosOperations'
import axios from 'axios'
import { workouts, exercises } from './ExerciseData';
import { axiosWithAuth } from '../utils/axiosWithAuth';
const initialExercise = {

    exerciseName: '',
    reps: 0,
    bodyPart: '',
    id: 0

}
// on change functions

// data for ui
// let uiData = {
//     h1 : 'exercise page',
//     objects: 
// }
// let header1 = 'exercise page'

// let 
// const DataToTrack = () => {

//     const [editing, setEditing] = useState(false);
//     const [objectToEdit, setObjectToEdit] = useState(initialExercise)

//     const [makeNewObject, setMakeNewObject] = useState(false)
//     const [objectToAdd, setObjectToAdd] = useState(initialExercise)

//     let [myObjects, setMyObjects] = useState(exercises[1])

//     const deleteObject = myObject => {

//         console.log('delete exercise', myObject)
//         console.log(myObjects)
//         setMyObjects(myObjects.filter(exer => exer.id !== myObject.id))
//     }

//     const editObject = (myObject) => {
//         console.log('edit exercise', myObject)
//         setEditing(true)
//         setObjectToEdit(myObject)
//     }
//     const saveObject = (e, myObject) => {
//         e.preventDefault()
//         console.log('save edited exercise', myObject)
//         // console.log([
//         //     ...myExercises.slice(0, exercise.id),
//         //     exercise,
//         //     ...myExercises.slice(exercise.id + 1)
//         // ])
//         setMyObjects([
//             ...myObjects.slice(0, myObject.id),
//             myObject,
//             ...myObjects.slice(myObject.id + 1)
//         ])
//         // setMyExercises([myExercises.spl, exercise])
//     }
//     const addObject = (e, myObject) => {
//         e.preventDefault()
//         console.log('add exercise', myObject)
//         setMyObjects([...myObjects, myObject])
//         // setMakeNewExercise(true)
//         // setExerciseToAdd(exercise)
//     }
//     return (
//         <div>
//             <h1>header1</h1>

//         </div>
//     )


// }
// const findState = (tree, path) => {

    
//     if(tree === undefined) {
//         return null
//     }
//     if(path.length === 0) {
//         return tree
//     }
//     let firstNode = path[0]

//     return findState(tree[firstNode], path.filter((node, i) => i > 0))

// }
// // generic read
// const getContainer = (url, setter, pathToPayload, fakeData) => {
//     axios
//         .get(url)
//         .then(res => {
//             console.log(res)
//             // setter(findState(res, pathToPayload))
//             console.log(findState(res, pathToPayload))

//         })
//         .catch(err => {
//             console.log(err)
//         })
//     setter(fakeData)
    
// }
// // generic destroy
// const deleteItem = (item, appContainer, setter, url) => {

//     console.log('delete exercise', item)
//     console.log(appContainer)
//     // axios call here
//     axios
//         .delete(url, item)
//         .then(res => {
//             console.log(res)
//         })
//     setter(appContainer.filter(exer => exer.id !== item.id))
// }

// // generic update
// const updateItem = (e, item, appContainer, setter, url) => {
//     e.preventDefault()
//     console.log('save edited exercise', item)
//      axios
//         .post(url, item)
//         .then(res => {
//             console.log(res)
//         })
//     setter([
//         ...appContainer.filter(exer => exer.id !== item.id),
//         item
//         // ...appContainer.slice(item.id + 1)
//     ])
//     // setMyExercises([myExercises.spl, exercise])
// }
// // generic save
// const saveItem = (e, item, appContainer, setter, url) => {
//     e.preventDefault()
//     console.log('add exercise', item)

//     axios
//         .post(url, item)
//     setter([...appContainer, item])
//     // setMakeNewExercise(true)
//     // setExerciseToAdd(exercise)
// }


const Exercises = () => {

    const [editing, setEditing] = useState(false);
    const [exerciseToEdit, setExerciseToEdit] = useState(initialExercise)

    const [makeNewExercise, setMakeNewExercise] = useState(false)
    const [exerciseToAdd, setExerciseToAdd] = useState(initialExercise)

    let [myExercises, setMyExercises] = useState([])

    // read
    const getExercises = () => {
        // axios.get(`https://reqres.in/api/WeightLiftingBW`)
        // .then(res => {
        //     console.log(res)
        //     setMyExercises(res.data)
        // })
        getContainer(`https://reqres.in/api/WeightLiftingBW`,
                    setMyExercises,
                    ['data'], 
                    exercises[1])
        console.log(myExercises)

    }
    // delete
    const deleteExercise = exercise => {

        // console.log('delete exercise', exercise)
        // console.log(myExercises)
        // // axios call here
        // axios
        // .delete(`https://reqres.in/api/WeightLiftingBW`, exercise)
        // .then(res => {
        //     console.log(res)
        // })
        // setMyExercises(myExercises.filter(exer => exer.id !== exercise.id))
        deleteItem( exercise,
                    myExercises,
                    setMyExercises,
                    `https://reqres.in/api/WeightLiftingBW`)


    }

    /// edit
    //////
    const editExercise = (exercise) => {
        console.log('edit exercise', exercise)
        setEditing(true)
        setExerciseToEdit(exercise)
    }

    const saveExercise = (e, exercise) => {
        // e.preventDefault()
        // console.log('save edited exercise', exercise)
        // // console.log([
        // //     ...myExercises.slice(0, exercise.id),
        // //     exercise,
        // //     ...myExercises.slice(exercise.id + 1)
        // // ])
        // axios
        // .post(`https://reqres.in/api/WeightLiftingBW`, exercise)
        // .then(res => {
        //     console.log(res)
        // })
        // setMyExercises([
        //     ...myExercises.slice(0, exercise.id),
        //     exercise,
        //     ...myExercises.slice(exercise.id + 1)
        // ])
        updateItem( e,
                    exercise,
                    myExercises,
                    setMyExercises,
                    `https://reqres.in/api/WeightLiftingBW`)

        // setMyExercises([myExercises.spl, exercise])
    }
    //////
/*
exercise: "Squat",
weight: 150,
units: "lbs",
sets: 2,
reps: 8,
workout_id: 1



id: 1,
date: "2/20/2020",
workout_name: "Triceps",
user_id: 1

id: 2,
date: "4/20/2020",
workout_name: "Arms",
user_id: 1


email: "test123@email.com",
password: "password",
firstName: "Who",
lastName: "knows"
*/
    // add
    const addExercise = (e, exercise) => {
        // e.preventDefault()
        // console.log('add exercise', exercise)
        // setMyExercises([...myExercises, exercise])
        addItem(   e,
                    exercise,
                    myExercises,
                    setMyExercises,
                    `https://reqres.in/api/WeightLiftingBW`)

        // setMakeNewExercise(true)
        // setExerciseToAdd(exercise)
    }
    // list of exercise deletable with a form to edit and a form to add new ones
    return (
        <div>
            <h1>exercise page</h1>
            <button onClick={() => {getExercises()}}>
                get exercises
                </button> 
            {myExercises.length > 0 && myExercises.map((exercise, i) => (
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