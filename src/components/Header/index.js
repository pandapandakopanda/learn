import React from 'react'
import './index.css'
import HeadBlocks from '../Header_blocks'




class Header extends React.Component {

    names = ['one','two','three','four','five']

    state = {
        active: false,
        activeName: null
    }
    

    onClick = (ev)=>{
        let {target} = ev       

        this.setState({
            activeName: target.id
        })
    }

    render(){

        const elements = this.names.map(el=> {            
            return <HeadBlocks 
                        id={el} 
                        key={this.names.indexOf(el)}
                        active = {this.state.active}
                        activeName={this.state.activeName}
                    >
                        {el}
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