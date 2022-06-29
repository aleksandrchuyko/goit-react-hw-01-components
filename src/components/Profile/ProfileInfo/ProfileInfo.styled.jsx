import styled from 'styled-components';

export const UserPhoto = styled.img.attrs(props => ({
  src: props.avatar,
  alt: props.alt,
}))`
  width: 150px;
  border-radius: ${props => props.theme.radii.round};
`;

export const UserName = styled.p`
  display: block;
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const UserTag = styled.p`
  display: block;
  text-align: center;
  font-size: 12px;
`;

export const UserLocation = styled.p`
  display: block;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
`;
