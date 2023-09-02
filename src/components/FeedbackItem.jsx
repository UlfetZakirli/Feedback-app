import React, { useContext } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaEdit, FaTimes } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({ feedback }) => {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

    return (
        <Card>
            <div className="num-display">{feedback.rating}</div>
            <button onClick={() => deleteFeedback(feedback.id)} className='close' >
                <FaTimes color='purple' />
            </button>
            <button className='edit' onClick={() => editFeedback(feedback)}>
                <FaEdit color='purple' />
            </button>
            <div className="text-display">{feedback.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    feedback: PropTypes.object
}

export default FeedbackItem