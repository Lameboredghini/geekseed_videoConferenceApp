import React from 'react'
import logo from '../../sources/logo.jpg'
import { callStates } from '../../store/actions/callActions';
import { callToOtherUser } from '../../utils/wssConnection/webRTC/webRTCHandler';
const ActiveUsersListItem = (props) => {
    const {activeUser,callState}=props;
    const handleListItemPressed=()=>{
      if (callState === callStates.CALL_AVAILABLE){callToOtherUser(activeUser);}
        // to call another user
        
    }
  return (
    <div className='active_user_list_item' onClick={handleListItemPressed}>
        <div className='active_user_list_image_container'>
        <div className='active_user_list_image' src={logo}/>
        </div>
        <span className='active_use_list_text'>{activeUser.username}</span>
    </div>
  )
}

export default ActiveUsersListItem