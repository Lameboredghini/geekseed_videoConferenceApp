import React from 'react'

const SubmitButton = ({handleSubmitButtonPressed}) => {
  return (
    <div>
    <div>
        <button className='button1' onClick={handleSubmitButtonPressed}>
            Start a call
        </button>
    </div>

    </div>
  )
}

export default SubmitButton