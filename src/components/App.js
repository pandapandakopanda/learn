import React, {Component} from 'react'
import '../styles/app.css'
import Components  from './components'
import Button from './Button'
import Input from './Input'
import * as buttonFunc from './Button/buttonFunc'



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

                     <Input 
                        type='text'
                        disabled
                        plaseholder='type any'
                        classNames={['red', 'big']}
                        />

                </div>
                

            </div>
        )
    }
}

export default App