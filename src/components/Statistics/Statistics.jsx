import PropTypes from 'prop-types';
import { getRandomHexColor } from '../../utils/index';
import { Box } from 'components/Box';
import {
  StatsTitle,
  StatsList,
  StatItem,
  Label,
  Percents,
} from './Statistics.styled';

export const Statistic = ({ title, data }) => {
  return (
    <Box as="section" width="310px">
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatsList>
        {data.map(item => {
          return (
            <StatItem
              key={item.id}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <Label>{item.label}</Label>
              <Percents>{item.percentage}%</Percents>
            </StatItem>
          );
        })}
      </StatsList>
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
    })
  ).isRequired,
};
