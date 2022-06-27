import PropTypes from 'prop-types';
import {getRandomHexColor} from '../../utils/index';
import { Box } from "components/Box";
import { StatsTitle, StatItem } from './Statistics.styled';

export const Statistic = ({title, data }) => {
    return (
        <Box as='section'>
            {title && (<StatsTitle>{title}</StatsTitle>)}
            <ul>
                {data.map(item => {
                    return (
                        <StatItem key={item.id} style={{
                            backgroundColor: getRandomHexColor()
                        }} >
                            <span >{item.label}</span>
                            <span>{item.percentage}%</span>
                        </StatItem>
                    );
                })}
            </ul>
        </Box>
    );
};

Statistic.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ).isRequired,
};