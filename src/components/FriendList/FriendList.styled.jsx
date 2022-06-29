import styled from 'styled-components';

export const FriendsBar = styled.ul`
  width: 210px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const FriendInfo = styled.li.attrs(props => ({
  key: props.key,
}))`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const StatusOnline = styled.span`
  background-color: ${({ isOnline, theme }) => {
    return isOnline ? 'green' : 'tomato';
  }};
  width: 20px;
  height: 20px;
  display: block;
  border-radius: ${p => p.theme.radii.round};
`;

export const Avatar = styled.img``;

export const Name = styled.p``;
