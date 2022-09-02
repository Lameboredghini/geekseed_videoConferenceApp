import React from 'react'

const UsernameInput = (props) => {
    const {username, setUsername}=props;
  return (
    <div>
        <input placeholder='Please add name'
        type='text'
        value={username}
        onChange = {(event) => {setUsername(event.target.value);}}
        className="username"/>
    </div>
  )
}

export default UsernameInput