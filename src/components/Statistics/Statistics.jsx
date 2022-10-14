import PropTypes from 'prop-types';
import { StatisticsList, StasticsListItem, } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, percentage }) => (
  <StatisticsList>
 
      <StasticsListItem>
        Good:<span>{good}</span>
      </StasticsListItem>
      <StasticsListItem>
        Neutral:<span>{neutral}</span>
      </StasticsListItem>
      <StasticsListItem>
        Bad:<span>{bad}</span>
      </StasticsListItem>
 
      <StasticsListItem>
        Total:<span>{total}</span>
      </StasticsListItem>
      <StasticsListItem>
        Positive feedback: <span>{percentage}%</span>
      </StasticsListItem>

  </StatisticsList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};