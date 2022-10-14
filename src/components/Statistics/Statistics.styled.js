import styled from 'styled-components';

export const StatisticsList = styled.div`
display:flex;
`;

export const StasticsListItem = styled.li`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  border-radius:5px;
  margin-right:5px;
  padding: 3px;
    & span {
    margin-left: 20px;
    font-weight: bold;
  }
`;


