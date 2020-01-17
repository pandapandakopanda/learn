import React from 'react'
import './index.css'





class Button extends React.Component {

    state = {
           btnNum: '',
           buttonType:this.props.type,
           size: this.props.size
        }
        
        
        setStyle() {
            if(this.state.buttonType === '') this.setState({btnNum:this.props.onCLickHolder()})
            else this.props.onClickHolder()
        }
        setStyle = this.setStyle.bind(this)
        
        
        render(){
            const classname = `${this.state.buttonType}button${this.state.btnNum}` 
    
        return(
            <button
                onClick={this.setStyle}
                className={classname}
                size = {this.size}
            >
                {this.props.title}
            </button>
        )
    }
}


export default Button