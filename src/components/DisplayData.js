import React from 'react'

function DisplayData({firstname, lastname}) {
  return (
    <div>
        <h1>{firstname}</h1>
        <h1>{lastname}</h1>
    </div>
  )
}

export default DisplayData