import PropTypes from 'prop-types';
import { ListOfStats, Stat, StatTitle, StatValue } from './ProfileStatsBar.styled';

export const ProfileStatsBar = ({ stats }) => {
    return (
            <ListOfStats>
                <Stat>
                    <StatTitle>Followers</StatTitle>
                    <StatValue>{stats.followers}</StatValue>
                </Stat>
                <Stat>
                    <StatTitle>Views</StatTitle>
                    <StatValue>{stats.views}</StatValue>
                </Stat>
                <Stat>
                    <StatTitle>Likes</StatTitle>
                    <StatValue>{stats.likes}</StatValue>
                </Stat>
            </ListOfStats>
    );
};

ProfileStatsBar.propTypes = {
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
};