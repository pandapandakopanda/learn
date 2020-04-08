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
            activeName:target.dataset.name
        }, ()=>{
            console.log('target.dataset.name: ', target.dataset.name);
            console.log(this.state.activeName);
            
        })  
    }

    isActive = (name => this.state.activeName === name) 

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