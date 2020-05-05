import React, {Component} from 'react'
import './index.scss'
import pig from '../../../images/pig.jpg'


class Pork extends Component {
    render(){
        return(
            <div className='pig'>
                <img className='pig' src={pig}/>
            </div>
        )
    }
}

export default Pork