import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { v4 as uuid } from 'uuid'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'

const App = () => {
  const [feedbacks, setFeedbacks] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid()
    setFeedbacks([newFeedback, ...feedbacks])
    console.log(newFeedback);
  }

  return (
    <>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route  path='/' element={
              <>
                <FeedbackForm handleAddFeedback={addFeedback} />
                <FeedbackStats feedbacks={feedbacks} />
                <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
              </>
            } />
            <Route path='/about' element={<AboutPage />} />

          </Routes>
        </div>
      </Router >
    </>
  )
}

export default App