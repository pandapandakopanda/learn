import React, {Component} from 'react'
import './index.scss'
import { BaseLink, withRoute } from 'react-router5'



class Nav extends Component {

    list = ['kittens','doggos','pigeon','pork','mice']

    showTarget=(el)=>{
        console.log(el.target);
    }

    calcClasses = (obj) =>{
        return Object.keys(obj).filter(key => !!obj[key] ).join(' ')  
    }

    render(){
        const { router } = this.props   
        const activeName = this.props.route.name       
        const elements = this.list.map((element, i, list) => {
            const isReload = list.indexOf(element)===0
            const isActive = `three.${element}` === activeName

            const className = this.calcClasses({
                active: isActive
            })

            return(
                
                    <li className={className}
                        name={element}
                        key = {element}
                    >
                        <BaseLink
                            router={router}
                            routeName={`three.${element}`}
                            routeOptions={{reload:isReload}}
                        >
                        {element}
                        </BaseLink>
                    </li>
               
            )
        })
        return(
            <nav>
                    <ul>
                       {elements}
                    </ul>
            </nav>
        )
    }
}


export default withRoute(Nav)