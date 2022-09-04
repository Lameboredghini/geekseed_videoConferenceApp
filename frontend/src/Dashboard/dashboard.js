import React, { useEffect } from 'react'
import logo from '../sources/logo.jpg'
import ActiveUsersList from './components/ActiveUsersList';
import * as webRTCGroupHandler from '../utils/wssConnection/webRTC/webRTCGroupCallHandler'
import * as webRTCHandler from '../utils/wssConnection/webRTC/webRTCHandler';
import DirectCall from '../Login/components/DirectCall/DirectCall';
import DashboardInformation from './components/DashboardInformation/DashboardInformation';
import {connect} from 'react-redux';
import { callStates } from '../store/actions/callActions';
import './Dashboard.css';
import GroupCallRoomsList from './components/GroupCallRoomsList/GroupCallRoomslist';
const Dashboard = ( {username, callState}) => {
  useEffect(()=>{
    webRTCHandler.getLocalStream();
    webRTCGroupHandler.connectWithMyPeer();
  },[]);
  return (
    <div className='dashboard_container background_main_color'>
      <div className='dashboard_left_section'>
        <div className='dashboard_content_container'>
            <DirectCall/>
          {callState !== callStates.CALL_IN_PROGRESS && <DashboardInformation username={username}/>}
        </div>
        <div className='dashboard_rooms_container background_secondary_color'>
            <GroupCallRoomsList/>
        </div>
      </div>
      <div className='dashboard_right_section background_secondary_color'>
        <div className='dashboard_active_users_list'>
          <ActiveUsersList/>
        </div>
        <div className='dashboard_logo_container'>
          <img className='dashboard_logo_image' src={logo} alt='No logo' />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps= ({call, Dashboard})=>({
...call,
...Dashboard
})
export default connect(mapStateToProps) (Dashboard);