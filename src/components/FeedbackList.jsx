import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

const FeedbackList = ({ feedbacks, handleDelete }) => {
    if (!feedbacks || !feedbacks.length) {
        return <h1>No feedbacks yet</h1>
    }

    return (
        <div>
            <AnimatePresence>
                {feedbacks.map((feedback) => (
                    <motion.div
                        key={feedback.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem key={feedback.id} feedback={feedback} handleDelete={handleDelete} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

FeedbackList.propTypes = {
    feedbacks: PropTypes.arrayOf(
        PropTypes.shape({
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        })
    )
}

export default FeedbackList