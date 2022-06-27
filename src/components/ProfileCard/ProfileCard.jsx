import { ProfileInfo } from "components/ProfileInfo/ProfileInfo";
import { ProfileStatsBar } from "components/ProfileStatsBar/ProfileStatsBar";
import PropTypes from 'prop-types';
import { Box } from "components/Box";

export const ProfileCard = ({ user }) => {
    return (
        <Box>
            <ProfileInfo username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} />
            <ProfileStatsBar stats={user.stats} />
        </Box>
    );
};

ProfileCard.propTypes = {
    user: PropTypes.exact({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.exact({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        })
    })
};
