import styled from 'styled-components';

const size = '300px';

export const TimerWrapper = styled.div`
  height: ${size};
  width: ${size};
  display: block;
`;

export const TimerLayer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
