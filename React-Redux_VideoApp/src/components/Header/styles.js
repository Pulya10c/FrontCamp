import styled from 'styled-components';
import blurImage from './blurImage.jpg';

export const Header = styled.header`
  padding: 10px 0 0;
  text-align: center;
  min-height: 200px;
  background-image: url(${blurImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
