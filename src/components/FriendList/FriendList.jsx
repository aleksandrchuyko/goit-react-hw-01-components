import {
  FriendsBar,
  FriendInfo,
  StatusOnline,
  Avatar,
  Name,
} from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <FriendsBar>
      {friends.map(friend => {
        return (
          <FriendInfo key={friend.id}>
            <StatusOnline isOnline={friend.isOnline}>
              &nbsp; &nbsp; &nbsp;
            </StatusOnline>
            <Avatar src={friend.avatar} alt="User avatar" width="48" />
            <Name>{friend.name}</Name>
          </FriendInfo>
        );
      })}
    </FriendsBar>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
