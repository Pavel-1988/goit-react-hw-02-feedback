import React from 'react'
import PropTypes from 'prop-types';
import {ButtonList, Button} from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback}) => (
  <ButtonList>
   {options.map(option => (
      <Button
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </Button>
    ))}
  </ButtonList> 
)

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};