import { FriendInfo , StatusOnline} from './FriendList.styled'; 
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <ul>
            {friends.map(friend => {
                return (
                    <FriendInfo key={friend.id}>
                        <StatusOnline isOnline={friend.isOnline}>&nbsp; &nbsp; &nbsp;</StatusOnline>
                        <img src={friend.avatar} alt="User avatar" width="48" />
                        <p>{friend.name}</p>
                    </FriendInfo>
                );
            })}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ).isRequired,
}