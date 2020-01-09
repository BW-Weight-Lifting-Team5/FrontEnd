import React from 'react'

const Exercise = (props) => {

    const { exerciseName, reps, bodyPart, id } = props.exercise

    return (
        <div>
            {/* <p>Edit</p> */}
            <h3><span className='delete' onClick={e => {
                e.stopPropagation()
                props.deleteExercise(props.exercise)
            }}>x </span>
                {exerciseName}
                <span onClick={e => {
                    e.stopPropagation()
                    props.editExercise(props.exercise)
                }}> edit</span></h3>
            <p>{String(reps)}</p>
            <p>{bodyPart}</p>
            <p>{String(id)}</p>
        </div>
    )
}
export default Exercise;