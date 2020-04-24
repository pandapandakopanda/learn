import React from 'react'
import './index.css'




class Header_blocks extends React.Component {

    onClick = ()=>{
        
    }


    calcClasses = (obj) =>{
        return Object.keys(obj).filter(key => !!obj[key] ).join(' ')  
    }
      
   render(){

        const className = this.calcClasses({
                            button:true,
                            active: this.props.active === true,
                            hidden: this.props.active === false
                        })


        return(
            <div className= {className}
                data-name = {this.props.name}
                active = {this.props.active}
                onClick = {this.onClick}
            >
                {this.props.children}
            </div>
        )
    }
}


export default Header_blocks