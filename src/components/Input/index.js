import React from 'react'
import './index.css'
import Button from '../Button';




class Input extends React.Component {
    

    state = {
        value: '',
    }

    isDown = true


    сhangeHolder=(ev)=>{
        const {value} = ev.target
        if (+parseInt(value) !== +value || isNaN(+parseInt(value)))  this.setState({value:''})
        else this.setState({value:value})
    }

    increaseNumber=()=> {
            this.setState({value: +this.state.value + 1})
    }

    onMouseDown=()=> {
        this.isDown = true
        let increase=()=>{
            setTimeout(() => {
                if(this.isDown) {
                    this.increaseNumber()
                    increase()
                }
                else return
            }, 100);
        }
        increase()
    }

    onMouseUp =()=>{
        this.isDown = false
    }

    getClassName=()=>{
        return `normal_input ${this.props.classNames.join(' ')}`
    }


    render(){
        
        return(
            
            <div>
                <input 
                    onChange={this.сhangeHolder}
                    value={this.state.value}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    className={this.getClassName()}
                />

                <Button 
                    title = 'hey'
                    onMouseDown={this.onMouseDown}
                    onMouseUp={this.onMouseUp}
                    type='increase_'
                    onClick={this.increaseNumber}
                />

            </div>
            
        )
    }

}

export default Input