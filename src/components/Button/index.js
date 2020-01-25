import React from 'react'
import './index.css'





class Button extends React.Component {

    state={
        isDown:false
    }

    onMouseDown=()=>{
        this.setState({isDown:true})
        setTimeout(() => {
            this.props.onMouseDown(this.state.isDown)
        }, 1000);
    }

    onMouseUp=()=>{
        this.setState({isDown: false})
    }

    componentDidMount(){
        window.addEventListener('mouseup', this.onMouseUp)
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