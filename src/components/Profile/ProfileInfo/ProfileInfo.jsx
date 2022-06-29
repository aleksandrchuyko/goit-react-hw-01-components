import PropTypes from 'prop-types';
import {
  UserTag,
  UserPhoto,
  UserName,
  UserLocation,
} from './ProfileInfo.styled';
import { Box } from 'components/Box';

export const ProfileInfo = ({ username, tag, location, avatar }) => {
  return (
    <Box>
      <UserPhoto avatar={avatar} alt="user photo" />
      <UserName>{username}</UserName>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </Box>
  );
};

ProfileInfo.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
