import React from 'react'
import {connect} from 'react-redux';

import './ActiveUsersList.css'
import ActiveUsersListItem from './ActiveUsersListItem';
// const activeUsers=[
//     {
//         SocketId: 101,
//         username: 'Himanshu'
//     },
//     {
//         SocketId: 102,
//         username: 'Santosh'
//     },
//     {
//         SocketId: 103,
//         username: 'Divyam'
//     }
// ];

const ActiveUsersList = ({activeUsers, callState}) => {
  return (
    <div className='active_user_list_container'>
        {activeUsers.map((activeUser)=><ActiveUsersListItem key={activeUser.SocketId} 
        activeUser={activeUser}
        callState={callState}/>)}
    </div>
  )
};

const mapStateToProps =({dashboard, call})=> ({
    ...dashboard,
  ...call });
export default connect(mapStateToProps)(ActiveUsersList)