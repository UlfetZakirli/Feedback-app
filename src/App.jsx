import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import Card from './components/shared/Card'

const App = () => {
  const [feedbacks, setFeedbacks] = useState(FeedbackData)

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedbacks={feedbacks} />
      </div>
    </>
  )
}

export default App