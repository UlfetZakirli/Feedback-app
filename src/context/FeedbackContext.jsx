import React, { createContext, useState } from 'react'
import { v4 as uuid } from 'uuid'
import FeedbackData from './../data/FeedbackData';
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedbacks, setFeedbacks] = useState(FeedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })


    const addFeedback = (feedback) => {
        const newFeedback = {
            id: uuid(),
            ...feedback
        }
        setFeedbacks([newFeedback, ...feedbacks])
    }


    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure to delete this feedback?')) {
            setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id))
        }
    }

    const editFeedback = (feedback) => {
        setFeedbackEdit({
            item: feedback,
            edit: true
        })
    }

    const updateFeedback = (id, updatedFeedback) => {
        setFeedbacks(feedbacks.map((item) => item.id === id ? { ...item, ...updatedFeedback } : item))
        
    }

    const providerValue = {
        feedbacks,
        feedbackEdit,
        setFeedbacks,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback
    }

    return (
        <FeedbackContext.Provider value={providerValue}>
            {children}
        </FeedbackContext.Provider>
    )
}


export default FeedbackContext

