import styled from 'styled-components';
import blurImage from './blurImage.jpg';

export const Header = styled.header`
  display: grid;
  grid-gap: 10px;
  justify-content: center;
  align-content: center;

  padding: 10px;
  min-height: 200px;
  background-image: url(${blurImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
