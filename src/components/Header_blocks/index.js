import React from 'react'
import './index.css'




class Header_blocks extends React.Component {

    onClick = ()=>{
        
    }


    calcClasses = (obj) =>{
        let className = 'button'
        Object.keys(obj).forEach(key => {if (obj[key]) className +=' '+ key.toString()+' '})       
        return className.trim()
    }
   
   
   render(){

        const className = this.calcClasses({
                            '': this.props.active === null,
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