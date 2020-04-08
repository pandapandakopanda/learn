import React from 'react'
import './index.css'




class Header_blocks extends React.Component {


    state = {
        active: this.props.active,
    }

    onClick = ()=>{
        let {active} = this.state 
        
        this.setState({
            active:(active === false) ? true : false,
        })
    }

   
   
   render(){

        let className = (this.state.active)? 'active':'default'


        return(
            <div className={`blocks${(className!==undefined)? ` ${className}` : ''} `}
                name = {this.props.name}
                active = {this.state.active}
                onClick = {this.onClick}
            >
                {this.props.children}
            </div>
        )
    }
}


export default Header_blocks