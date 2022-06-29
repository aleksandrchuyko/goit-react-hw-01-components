import styled from 'styled-components';

export const TransactionDetails = styled.tr.attrs(props => ({
  key: props.key,
}))`
  background-color: ${({ index, theme }) => {
    return index % 2 ? theme.colors.white : theme.colors.muted;
  }};
`;
