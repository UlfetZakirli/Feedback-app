import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = () => {
    const { feedbacks } = useContext(FeedbackContext)
    const avg = (feedbacks.reduce((acc, cur) => acc + cur.rating, 0) / feedbacks.length).toFixed(1).replace(/[,.]0$/, '')

    return (
        <div className='feedback-stats'>
            <h4>{feedbacks.length} Reviews</h4>
            <h4>Average Rating: {isNaN(avg) ? 0 : avg}</h4>
        </div>
    )
}


export default FeedbackStats