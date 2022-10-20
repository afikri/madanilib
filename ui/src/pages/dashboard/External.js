import React from 'react'
import { Link } from 'react-router-dom'

const External = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <h1>Development data is on Progress... </h1>
      <Link to='/dashboard'>Back...</Link>
    </div>
  )
}

export default External