import React, {useState} from 'react';
import { connect } from 'react-redux';
import {setUsername} from '../store/actions/dashboardActions';
import SubmitButton from './components/SubmitButton';
import UsernameInput from './components/username';
import{useHistory} from 'react-router-dom'
import {registerNewUser} from '../utils/wssConnection/wssConnection'
const Login = ({saveUsername}) => {
  const [username,setUsername]=useState('');
  const history = useHistory()
  const handleSubmitButtonPressed =()=>{
    
    registerNewUser(username);
    saveUsername(username);
    history.push('/dashboard');
  };
  return (
    <div>login
      <div>
        <UsernameInput username={username} setUsername={setUsername}/>
        <SubmitButton handleSubmitButtonPressed={handleSubmitButtonPressed}/>
      </div>
    </div>
  )
}
const mapActionsToProps = (dispatch)=>{
  return{
    saveUsername: username => dispatch(setUsername(username))
  }
}
export default connect(null, mapActionsToProps) (Login);