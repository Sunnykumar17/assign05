import React from 'react'
import "./Comp3.css";
const Comp3 = () => {
  return (
    <div className='card-container'>
      <div className='card'>
        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="img" style={{ width: "100%", height: "60%" }} />
        <div className='bio'>
          <h2>Dima Blover</h2>
          <p>UI/UX Designer</p>
        </div>
        <div>
          <ul>
            <li>26</li>
            <li>94</li>
            <li>139</li>
          </ul>
          <ul>
            <li>shoot</li>
            <li>Following</li>
            <li>Followers</li>
          </ul>
        </div>
    </div>
   </div>
  )
}

export default Comp3