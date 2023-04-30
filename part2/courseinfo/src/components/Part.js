const Part = ( {parts} ) => {
    return (
        parts.map((course) =>
        <p key={course.id}>{course.name} {course.exercises}</p>)
    )
}

export default Part