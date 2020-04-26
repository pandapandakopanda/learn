import React, {Component} from 'react'
import './index.scss'
import doggos from '../images/doggo/doggos.png'

class Two extends Component {
  render(){
    return(
      <div className='two'>
          <img src={doggos} id='doggos'/>
          <p>
          You can connect your components using three different methods:<br/>
          Higher-order components: <code>withRouter, withRoute and routeNode</code>
          Render props: <code>Router, Route and RouteNode</code>
          Hooks: <code>useRouter, useRoute and useRouteNode</code>
          </p>
        </div>
    )
  }
}


export default Two