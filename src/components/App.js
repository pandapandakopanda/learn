import React, {Component} from 'react'
import '../styles/app.css'
import Components  from './components'
import Button from './Button'
import Picture from './Picture'
import Slider from './Slider'
import * as buttonFunc from './Button/buttonFunc'
import * as imgFunc from './Picture/imgFunc'


class App extends Component {

    components = Components.map(function(el){
        
        return <li key={el}><a href=''>{el}</a></li>
    })

  


    render() {       
        

        return(
            <div className='wrapper'>
                
                <div className = 'nav'>
                    <ul>{this.components}</ul>
                </div>

                <div className='main'>

                    <Button  
                        title='Hey'
                        className='button'
                        type=''
                        size='medium'
                        onCLickHolder={buttonFunc.calc}
                    />

                     <Picture onClickHolder={imgFunc.onCLickHolder} /> 

                     <Slider />

                </div>
                

            </div>
        )
    }
}

export default App