import React from 'react'
import PropTypes from 'prop-types'

const FeedbackStats = ({ feedbacks }) => {

    const avg = (feedbacks.reduce((acc, cur) => acc + cur.rating, 0) / feedbacks.length).toFixed(1).replace(/[,.]0$/, '')

    return (
        <div className='feedback-stats'>
            <h4>{feedbacks.length} Reviews</h4>
            <h4>Average Rating: {isNaN(avg) ? 0 : avg}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedbacks: PropTypes.array.isRequired,
}

export default FeedbackStats