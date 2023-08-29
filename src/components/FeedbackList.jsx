import React from 'react'
import FeedbackItem from './FeedbackItem'

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

export default FeedbackList