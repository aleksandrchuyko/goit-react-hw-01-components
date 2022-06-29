import styled from 'styled-components';

export const ListOfStats = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

export const Stat = styled.li`
  width: 70px;
  list-style: none;
  display: flex;
  flex-direction: column;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.muted};
`;

export const StatTitle = styled.span`
  text-align: center;
  color: ${p => p.theme.colors.text};
`;

export const StatValue = styled.span`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
`;
