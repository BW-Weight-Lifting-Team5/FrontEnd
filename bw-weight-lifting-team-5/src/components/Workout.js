import React from 'react'

const Workout = (props) => {

    const { date, name } = props.workout

    return (
        <div>
            {/* <p>Edit</p> */}
            <h3><span className='delete' onClick={e => {
                e.stopPropagation()
                props.deleteWorkout(props.workout)
            }}>x </span>
                {/* {workoutName} */}
                <span onClick={e => {
                    e.stopPropagation()
                    props.editWorkout(props.workout)
                }}> edit</span></h3>
            <p>{date}</p>
            <p>{name}</p>
        </div>
    )
}
export default Workout;