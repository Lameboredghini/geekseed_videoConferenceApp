import React from 'react';
import GroupCallRoomsListItem from './GroupcallRoomsListItems';

import './GroupCallRoomsList.css';

const dummyList = [
  {
    roomId: '123123',
    hostName: 'Himanshu'
  },
  {
    roomId: '3213213',
    hostName: 'Divyam'
  }
];

const GroupCallRoomsList = () => {
  return (
    <>
      {dummyList.map(room => <GroupCallRoomsListItem key={room.roomId} room={room} />)}
    </>
  );
};

export default GroupCallRoomsList;
