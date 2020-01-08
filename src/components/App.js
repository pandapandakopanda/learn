import React, {Component} from 'react'
import '../styles/app.css'
import Components  from './components'
import Button from './Button'
import Picture from './Picture'
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
                        className='pinkButton'
                        onCLickHolder={buttonFunc.openAlert.bind(this,'HELLO')}
                    />

                    <Picture onClickHolder={imgFunc.openModalWindow} />

                </div>
                

            </div>
        )
    }
}

export default App