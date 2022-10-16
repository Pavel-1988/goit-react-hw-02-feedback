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
  
  onFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

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
     const options = Object.keys(this.state);
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onFeedback}
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
