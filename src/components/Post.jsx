import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Post = () => {


    return (
        <div>
            <Routes>
                <Route path='/show' element={<h4>Show Page</h4>} />
            </Routes>
            <h1>Post Page</h1>

        </div>


    )
}

export default Post