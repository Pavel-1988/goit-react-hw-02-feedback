import styled from 'styled-components';

export const ButtonList = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  `
export const Button = styled.button`
  border-radius: 5px;
  padding: 3px;
  width: 60px;
  background-color: #fff;
  font-weight:bold;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:active{
    background-color:blue;
    color: #ffffff;
  }
`
