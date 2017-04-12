import styled from 'styled-components';

export const TitleAreaWrapper = styled.div`
  width: 100%;
  height: 160px;
  position: absolute;
  background-color: rgba(134, 142, 150, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: ${props => props.type === 'positive' ? 'left' : 'right'}
`;
