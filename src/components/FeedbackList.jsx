import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

const FeedbackList = ({ feedbacks }) => {
    if (!feedbacks || !feedbacks.length) {
        return <h1>No feedbacks yet</h1>
    }

    return (
        <div>
            {feedbacks.map((feedback) => (
                <FeedbackItem key={feedback.id} feedback={feedback} />
            ))}
        </div>
    )
}

FeedbackList.propTypes = {
    feedbacks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        })
    )
}

export default FeedbackList