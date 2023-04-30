import Part from './Part'
import Sum from './Sum'

const Content = ( {parts} ) => {
    return (
        <div>
            <Part parts={parts} />
            <strong>Total of <Sum parts={parts} /> exercises</strong>
        </div>
    )
}

export default Content