import React from 'react'
import './index.css'
import Button from '../Button';



class Input extends React.Component {


    state = {
        value: '',
    }

    сhangeHolder=(ev)=>{
        const {value} = ev.target
        if (+parseInt(value) !== +value || isNaN(+parseInt(value)))  this.setState({value:''})
        else this.setState({value:value})
    }

    increaseNumber=()=> {
            this.setState({value: +this.state.value + 1})
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
                    onMouseDown={this.increaseNumber}
                    type='increase_'
                    onClick={this.increaseNumber}
                />

            </div>
            
        )
    }

}

export default Input