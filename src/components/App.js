import React, {Component} from 'react'
import '../styles/app.css'
import Components  from './components'
import Button from './Button'
import Input from './Input'
import * as buttonFunc from './Button/buttonFunc'
import Header from './Header'



class App extends Component {


    render() {          

        return(
          <div className='main'>
              <Header />
          </div>
        )
    }
}

export default App