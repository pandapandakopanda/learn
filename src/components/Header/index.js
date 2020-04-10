import React from 'react'
import './index.css'
import HeadBlocks from '../Header_blocks'




class Header extends React.Component {

    names = ['one','two','three','four','five']

    state = {
        activeName: null
    }
    


    onClick = (ev)=>{   
        
        if(ev.target.className.indexOf('button') === -1) {
            this.setState({
                activeName: null
            })
            return
        }
        
        let {name}  = ev.target.dataset
        let {activeName} = this.state
        
        this.setState({
            activeName:(activeName === name)? null : name
        })  
    }

    isActive = (name) =>  {
        if (this.state.activeName === null ) return null
        else return this.state.activeName === name
    }


    render(){

        const elements = this.names.map(name => {            
            return <HeadBlocks 
                        name={name} 
                        key={name}
                        active = {this.isActive(name)}
                    >
                        {name}
                    </HeadBlocks>
        })

        return(

            <div className = 'header'
                 onClick = {this.onClick}
            >
                {elements}

            </div>

        )
    }
}


export default Header