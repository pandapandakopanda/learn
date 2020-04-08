import React from 'react'
import './index.css'




class Header_blocks extends React.Component {

    state = {
        className: 'default'
    }

    onClick = ()=>{
        console.log(this.props.active);
        console.log('this.buttonProps: ', this.buttonProps);
        this.setState({
            className: this.calcClasses(this.buttonProps)
        })
    }

    buttonProps = {
        default: true,
        active: (this.props.active === true),
        hidden: (this.props.active === false)
    }



    calcClasses = (obj) =>{
        let className = ''
        Object.keys(obj).forEach(key => {if (obj[key]) className += key.toString()+' '})       
        return className.trim()
    }
   
   
   render(){

        let className = this.state.className


        return(
            <div className={`blocks${(className!==undefined)? ` ${className}` : ''} `}
                data-name = {this.props.name}
                active = {this.state.active}
                onClick = {this.onClick}
            >
                {this.props.children}
            </div>
        )
    }
}


export default Header_blocks