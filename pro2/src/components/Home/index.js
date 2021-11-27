import React from 'react'
import {Route,Routes} from "react-router-dom";

const Home = () => {
    return (
        <>
        <Routes>
        <Route path="/home" element={<Home/>}/>
       </Routes>
<div className='home'>
    <h1>l</h1>
</div>
       </>
    )
}

export default Home
