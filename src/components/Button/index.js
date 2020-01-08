import React from 'react'
import './index.css'





class Button extends React.Component {
    render(){
        return(
            <button
                onClick={this.props.onCLickHolder}
                className={this.props.className}
            >
                {this.props.title}
            </button>
        )
    }
}


export default Button