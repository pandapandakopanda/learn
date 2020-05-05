import React from 'react'
import './index.scss'
import HeadBlocks from '../HeaderBlocks'
import { BaseLink, withRoute } from 'react-router5'
import diamond from '../images/diamond.png'




class Header extends React.Component {

  names = ['one','two','three','four','five']


    onClick = ()=>{
   
    }

    render(){
        const { router } = this.props
        const activeName = this.props.route.name
        
        const elements = this.names.map((name, i,names) => {
            const isReload = names.indexOf(name)===0
            const isActive = name === activeName
            return (
                <HeadBlocks
                    name={name}
                    key={name}
                    active={isActive}
                >
                <BaseLink
                    router={router}
                    routeName={name}
                    routeOptions={{reload:isReload}}
                >
                    {name}
                </BaseLink>
            </HeadBlocks>
            )
        })

        return(

            <header onClick = {this.onClick}>
                <img id='diamond' src={diamond} alt='diamond'/>
                {elements}
            </header>

        )
    }
}


export default withRoute(Header)
