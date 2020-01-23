import React from 'react'
import './index.css'





class Button extends React.Component {

    state={
        isDown:true
    }

    onMouseDown=()=>{
        this.setState({isDown: false})
        console.log('isDown: ', this.state.isDown);
    }

    onMouseUp=()=>{
        console.log(this.state.isDown);
        this.setState({isDown: true})
    }

     
        render(){
            const classname = `${this.props.type}button` 
    
            return(
                <button
                    onClick={this.props.onClick}
                    onMouseDown = {this.onMouseDown}
                    onMouseUp = {this.onMouseUp}
                    className={classname}
                    title = {this.props.title}
                >
                    {this.props.children}
                </button>
            )
    }
}


export default Button