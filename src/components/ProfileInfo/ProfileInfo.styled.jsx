import styled from "styled-components";

export const UserPhoto = styled.img.attrs(props => ({
    src: props.avatar,
    alt: props.alt
}))`
width: 300px;
`;

export const UserTag = styled.p`
    font-size: 18px;
`;