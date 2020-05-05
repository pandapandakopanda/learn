import React, {Component} from 'react'
import './index.scss'
import Nav from './components/Nav'
import Main from './components/Main'

class Three extends Component {
  render(){
    return(
      <div className='three'>
          <Nav />
          <Main />
        </div>
    )
  }
}


export default Three