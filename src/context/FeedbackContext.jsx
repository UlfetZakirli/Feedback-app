import React, { createContext, useEffect, useState } from 'react'

const FeedbackContext = createContext()

const BASE_URL = 'http://localhost:5000/feedbacks'

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
        const res = await fetch(`${BASE_URL}/?_sort=id&_order=desc`)
        const data = await res.json()
        setFeedbacks(data)
        setIsLoading(false)
    }


    const addFeedback = async (newFeedback) => {
        const res = await fetch(`${BASE_URL}`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
        const data = await res.json()
        setFeedbacks([data, ...feedbacks])
    }


    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure to delete this feedback?')) {
            await fetch(`${BASE_URL}/${id}`, {
                method: 'DELETE',
            })
            setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id))

        }
    }

    const editFeedback = (feedback) => {
        setFeedbackEdit({
            item: feedback,
            edit: true
        })
    }

    const updateFeedback = async (id, updatedFeedback) => {
        const res = await fetch(`${BASE_URL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedFeedback)
        })
        const data = await res.json()

        setFeedbacks(feedbacks.map((item) => item.id === id ? { ...item, ...data } : item))

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

