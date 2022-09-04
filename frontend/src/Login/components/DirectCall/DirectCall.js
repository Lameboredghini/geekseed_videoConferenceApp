import React from 'react';
import { connect } from 'react-redux';
import LocalVideoView from '../LocalVideoView/Re/LocalVideoView';
import RemoteVideoView from '../../../Login/components/RemoteVideoView/RemoteVideoView';
import CallRejectedDialog from '../../../Dashboard/components/CallRejectedDialog/CallRejectedDialog';
import IncomingCallDialog from '../../../Dashboard/components/IncomingCallDialog/IncomingCallDialog';
import CallingDialog from '../../../Dashboard/components/CallingDialog/CallingDialog';
import { callStates, setCallRejected, setLocalCameraEnabled, setLocalMicrophoneEnabled } from '../../../store/actions/callActions';
import ConversationButtons from '../../../Dashboard/components/ConversationButtons/ConversationButtons';

const DirectCall = (props) => {
  const { localStream, remoteStream,callState, callerUsername, callingDialogVisible,callRejected,hideCallRejectedDialog,
  
  } = props;

  return (
    <>
      <LocalVideoView localStream={localStream} />
      {remoteStream && callState ===callStates.CALL_IN_PROGRESS && <RemoteVideoView remoteStream={remoteStream} />}
      {callRejected.rejected &&<CallRejectedDialog reason={callRejected.reason} hideCallRejectedDialog={hideCallRejectedDialog}/>}
      {callState===callStates.CALL_REQUESTED&& <IncomingCallDialog callerUsername = {callerUsername}/>}
      {callingDialogVisible && <CallingDialog/> }
      {remoteStream && callState ===callStates.CALL_IN_PROGRESS && <ConversationButtons {...props}/>}
    </>
  );
};

function mapStoreStateToProps ({ call }) {
  return {
    ...call
  };
}
function mapDispatchToProps (dispatch){
  return{
    hideCallRejectedDialog: (callRejectedDetails)=> dispatch(setCallRejected(callRejectedDetails)),
    setCameraEnabled: (enabled)=>dispatch(setLocalCameraEnabled(enabled)),
    setMicrophoneEnabled: (enabled)=>dispatch(setLocalMicrophoneEnabled(enabled))
  }
}
export default connect(mapStoreStateToProps, mapDispatchToProps)(DirectCall);

