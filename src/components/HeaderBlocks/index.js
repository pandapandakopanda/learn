import React from 'react'
import './index.scss'




class HeaderBlocks extends React.Component {

    onClick = ()=>{
        
    }


    calcClasses = (obj) =>{
        return Object.keys(obj).filter(key => !!obj[key] ).join(' ')  
    }
      
   render(){

        const className = this.calcClasses({
                            button:true,
                            active: this.props.active
                        })


        return(
            <div className= {className}
                data-name = {this.props.name}
                onClick = {this.onClick}
            >
                {this.props.children}
            </div>
        )
    }
}


export default HeaderBlocks