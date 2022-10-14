import React from 'react'
import { Section } from './Section/Section'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Statistics } from './Statistics/Statistics'
import {Notification} from './Notification/Notification'

export class App extends React.Component  {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  goodCount = () =>{
    this.setState(prevState => ({
      good:prevState.good +1
    }))
  }
  neutralCount = () =>{
    this.setState(prevState => ({
      neutral:prevState.neutral +1
    }))
  }
  badCount = () =>{
    this.setState(prevState => ({
      bad:prevState.bad +1
    }))
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
     const total = good + neutral + bad;
    return Math.round((good * 100) / total) || 0 ;
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            onGood={this.goodCount}
            onNeutral={this.neutralCount}
            onBed={this.badCount}
          />
        </Section>
        <Section title={"Statistics"}>
          {total > 0
            ? (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={percentage}
            />)
            : (<Notification message="There is no feedback" />)
          }
          
        </Section>
      </>
    )
  }

}
