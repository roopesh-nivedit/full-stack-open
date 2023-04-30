const Sum = ( {parts} ) => {
    const exercises = parts.map((courseExercises) => courseExercises.exercises)

    return exercises.reduce((accumulator, currentValue) => accumulator + currentValue)
}

export default Sum