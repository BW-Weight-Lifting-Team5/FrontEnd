import React, { useState } from 'react';
import Workout from './Workout';
import axios from 'axios';
import {
    findState,
    getContainer,
    deleteItem,
    updateItem,
    addItem,
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
    const printWorkouts = () => {
        console.log(myWorkout)
    }

    const getWorkouts = (e) => {
        // axios.get(`https://reqres.in/api/WeightLiftingBW`)
        // .then(res => {
        //     console.log(res)
        //     setMyExercises(res.data)
        // })
        getContainer(`https://reqres.in/api/WeightLiftingBW`,
                    setMyWorkouts,
                    ['payload'], 
                    workoutData)
        console.log(workoutData)

    }

    const deleteWorkout = (e, workout) => {

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

    const addWorkout = (e, workout) => {

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


    const editWorkout = (e, workout) => {
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
                    workout,
                    myWorkout,
                    setMyWorkouts,
                    `https://reqres.in/api/WeightLiftingBW`)
    }
    const createWorkout = (e, workout) => {

        addItem(    e,
                    workout,
                    myWorkout,
                    setMyWorkouts,
                    `https://reqres.in/api/WeightLiftingBW`)

    }
    return (
        <div>
            {/* {workoutData.map((workout, i) => {
                <Workout
                    key={i}
                    workout={workout}
                    deleteWorkout={deleteWorkout}
                    editWorkout={editWorkout}/>            })} */}
            {/* button with presetup data */}
            {/* works */}
            <button onClick={(e)=>{
                createWorkout(e,
                    {
                        id: 2,
                        date: "3/20/2020",
                        workout_name: "Bicepts",
                        user_id: 3
                    })
                }}>create</button>
            {/* works */}
            <button onClick={(e)=>{
                getWorkouts(e)
                }}>read</button>
            {/* <button onClick={(e)=>{
                updateWorkout(e)
                }}>update</button> */}
            {/* works */}
            <button onClick={(e)=>{
                deleteWorkout(e,
                    {
                        id: 1,
                        date: "2/20/2020",
                        workout_name: "Triceps",
                        user_id: 1
                    })
                }}>delete</button>
            
            {/* works */}
            <button onClick={(e)=>{
                editWorkout(e,
                    {
                        id: 1,
                        date: "2/20/2090",
                        workout_name: "Head",
                        user_id: 1
                    })
                }}>edit</button>
            
             <button onClick={(e)=>{
                printWorkouts(e)
                }}>print</button>
        </div>
    )

}
export default Workouts;