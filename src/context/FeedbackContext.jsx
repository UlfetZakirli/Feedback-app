import React, { createContext, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
const FeedbackContext = createContext()

const BASE_URL = 'http://localhost:5000'

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedbacks, setFeedbacks] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedbacks()
    }, [])

    const fetchFeedbacks = async () => {
        const res = await fetch(`${BASE_URL}/feedbacks?_sort=id&_order=desc`)
        const data = await res.json()
        setFeedbacks(data)
        setIsLoading(false)
    }


    const addFeedback = async (newFeedback) => {
        const res = await fetch(`${BASE_URL}/feedbacks`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
        const data = await res.json()
        setFeedbacks([data, ...feedbacks])
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
        isLoading,
        setFeedbacks,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,

    }

    return (
        <FeedbackContext.Provider value={providerValue}>
            {children}
        </FeedbackContext.Provider>
    )
}


export default FeedbackContext

