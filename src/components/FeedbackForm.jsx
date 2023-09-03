import { useContext, useEffect, useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackForm = () => {
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)
    const [text, setText] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    useEffect(() => {
        if (feedbackEdit.edit) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = ({ target: { value } }) => {
        if (value === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (value !== '' && value.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newFeedback = {
            text,
            rating
        }
        if (feedbackEdit.edit) {
            updateFeedback(feedbackEdit.item.id, newFeedback)
        } else {
            addFeedback(newFeedback)
        }
        setText('')
    }


    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} selected={rating} />
                <div className="input-group">
                    <input
                        type="text"
                        placeholder='Write a review'
                        onChange={handleTextChange}
                        value={text}
                    />
                    <Button isDisabled={btnDisabled} version='secondary' type="submit">Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm