import styled from 'styled-components';

export const Background = styled.div`
  height: 100%;
  width: 100%;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  background-color: linear-gradient(15deg, rgba(76, 112, 243, .4), rgba(99, 230, 190, .4));
  background-image: url('https://github.com/LIU9293/debatetimer/raw/gh-pages/include/back4.jpg');
  background-position: center center;
  background-size: cover;
  filter: grayscale(0.2) blur(8px);
`;
