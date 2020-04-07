import React from 'react'
import './index.css'





class Button extends React.Component {
    
    isMouseDown = false


    onMouseDown=()=>{
        this.props.onMouseDown()
        this.isMouseDown = true
    }

    onMouseUp=()=>{
        this.props.onMouseUp()
        this.isMouseDown = false
    }

    componentDidMount(){
        window.addEventListener('mouseup', function(){
            if(this.isMouseDown) this.onMouseUp()
        })
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