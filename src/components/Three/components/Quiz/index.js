/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { router } from 'react-router5'
import './index.scss'
import Main from './Main'

const questions = ['first', 'second', 'third','result']

class Quiz extends Component {
  
  state = {
    current: 0,
    buttonName: 'GET IT'
  }

  onClick = () => {
    const {current} = this.state
    if(current+1 <= questions.length-1) this.setState({current: current + 1})
    else this.setState({current:0})
  }

  render() {
    const {current} = this.state
    const isFirst = current === 0
    const isLast = current === questions.length-1
    let buttonName = 'GET IT'
    
    if(isFirst) buttonName = 'GET IT'
    if(isLast) buttonName = 'Start again'

    return (      
      <div className="quiz">
        <div className="question">
          <Main current={questions[this.state.current]} />
        </div>
        <div className="answers" />
        <div
          className="answerButton"
          onClick={this.onClick}
        >
          {buttonName}
        </div>
      </div>
    )
  }
}

export default Quiz
