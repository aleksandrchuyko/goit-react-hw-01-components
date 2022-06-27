import styled from "styled-components";


export const FriendInfo = styled.li.attrs(props => ({
    key: props.key
}))`
    list-style: none;
`;

export const StatusOnline = styled.span`
    background-color: ${({ isOnline, theme }) => {
        return isOnline ? "green" : "tomato";
    }};
`;