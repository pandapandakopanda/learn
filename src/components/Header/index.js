import React from 'react'
import './index.css'
import HeadBlocks from '../Header_blocks'
import { BaseLink, useRoute } from 'react-router5'




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
            const isReload = names.indexOf(name)===0
            return <HeadBlocks 
                        name={name} 
                        key={name}
                        active = {this.isActive(name)}
                    >
                        <BaseLink 
                            router={router}
                            routeName={name}
                            routeOptions={{reload:isReload}}
                        >
                        {name}
                        </BaseLink>
                    </HeadBlocks>
        })
        const { router } = useRoute()

        return(

            <header
                 onClick = {this.onClick}
            >
                {elements}

            </header>

        )
    }
}


export default Header