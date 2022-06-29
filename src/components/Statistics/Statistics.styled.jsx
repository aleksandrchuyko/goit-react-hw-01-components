import styled from 'styled-components';

export const StatsTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
`;

export const StatsList = styled.ul`
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const StatItem = styled.li.attrs(props => ({
  key: props.key,
}))`
  list-style: none;
  flex-basis: calc(100% / 5);
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  text-align: center;
  color: ${p => p.theme.colors.text};
`;

export const Percents = styled.span`
  text-align: center;
  color: ${p => p.theme.colors.text};
  margin-top: 15px;
`;
