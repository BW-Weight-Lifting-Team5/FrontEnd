import React, { useState } from 'react';
import Workout from './Workout';
import axios from 'axios';
import {
    findState,
    getContainer,
    deleteItem,
    updateItem,
    saveItem,
} from './AxiosOperations'

let workoutData = [
    {
        id: 1,
        date: "2/20/2020",
        workout_name: "Triceps",
        user_id: 1
    },
    {
        id: 2,
        date: "4/20/2020",
        workout_name: "Arms",
        user_id: 1
        
    }
]

const Workouts = () => {

    let [myWorkout, setMyWorkouts] = useState(workoutData)
    // print in console
    // press presetup buttons to test operations
    const printExercises = () => {
        console.log(myWorkout)
    }
    const deleteWorkout = workout => {

        // fake axios call here
        // fake update fake app data here
        // console.log('delete exercise', workout)
        // console.log(myWorkout)
        // // axios call here
        // axios
        // .delete(`https://reqres.in/api/WeightLiftingBW`, workout)
        // .then(res => {
        //     console.log(res)
        // })
        // setMyWorkouts(myWorkout.filter(work => work.id !== workout.id))
        deleteItem( workout,
                    myWorkout,
                    setMyWorkouts,
                    `https://reqres.in/api/WeightLiftingBW`)
    }

    const addWorkout = (workout) => {

        // e.preventDefault()
        // console.log('add exercise', workout)
        // axios
        //     .post(`https://reqres.in/api/WeightLiftingBW`, workout)
        //     .then(rest => {
        //         console.log(res)
        //     })
        // setMyWorkouts([...myWorkout, workout])
        addItem(    e,
                    workout,
                    myWorkout,
                    setMyWorkouts,
                    `https://reqres.in/api/WeightLiftingBW`)

    }


    const editWorkout = (e, exercise) => {
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
                    item,
                    appContainer,
                    setter,
                    url)
    }
    const createWorkout = (e, workout) => {

        addItem(    e,
                    item,
                    appContainer,
                    setter,
                    url)

    }

}
export default Workouts;

const Workouts = () => {

    const [myWorkouts, setMyWorkouts] = setState([])
    // const showWorkouts()

    return (
        <div>

            {/* {workoutData.map((workout, i) => {
                <Workout
                    key={i}
                    workout={workout}
                    deleteWorkout={deleteWorkout}
                    editWorkout={editWorkout}/>            })} */}
        </div>
    )

}

return default Workouts;