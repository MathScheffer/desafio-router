import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <>
      <div class="loader"></div>
      <div class="ring">
        Loading
        <span></span>
      </div>
    </>
  )
}

export default Spinner
