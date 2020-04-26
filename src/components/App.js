import React, {Component} from 'react'
import '../styles/app.css'
import Header from './Header'
import Main from './Main'


class App extends Component {
    render() {          
        return(
          <div className='wrapper'>
              <Header />
              <Main /> 
          </div>
        )
    }
}

export default App