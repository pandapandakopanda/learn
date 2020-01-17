import React from 'react'
import './index.css'
import Button from '../Button'



class Slider extends React.Component {

    print(){
        console.log('Hi');
    }


    render(){
        return(
            <div className='sliderWrap'>
                <Button 
                    type='slider'
                    onClickHolder={this.print}
                />
                
                <Button 
                    type='slider'
                    onClickHolder={this.print}
                />
            </div>
            
        )
    }
}


export default Slider