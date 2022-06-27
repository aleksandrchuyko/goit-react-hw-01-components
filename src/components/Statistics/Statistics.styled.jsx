import styled from "styled-components";

export const StatsTitle = styled.h2`
    text-transform: uppercase;
`;

export const StatItem = styled.li.attrs(props => ({
    key: props.key
}))`
    list-style: none;
`;