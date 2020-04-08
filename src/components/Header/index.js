import React from 'react'
import './index.css'
import HeadBlocks from '../Header_blocks'




class Header extends React.Component {

    names = ['one','two','three','four','five']

    state = {
        active: false,
    }
    

    onClick = (ev)=>{
        let {target} = ev       
    }

    render(){

        const elements = this.names.map(name=> {            
            return <HeadBlocks 
                        name={name} 
                        key={name}
                        active = {this.state.active}
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