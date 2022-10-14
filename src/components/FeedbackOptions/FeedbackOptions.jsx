import React from 'react'
import PropTypes from 'prop-types';
import {ButtonList, Button} from './FeedbackOptions.styled'

export const FeedbackOptions = ({onGood, onNeutral, onBed}) => (
  <ButtonList>
    <Button type='button' onClick ={onGood}>
      Good
    </Button>
    <Button type='button' onClick={onNeutral}>
      Neutral
    </Button>
    <Button type='button' onClick={onBed}>
      Bad
    </Button>
  </ButtonList> 
)

FeedbackOptions.propTypes = {
  onGood: PropTypes.number.isRequired,
  onNeutral: PropTypes.number.isRequired,
  onBed: PropTypes.number.isRequired,
}