import React, {Component} from 'react'
import './index.scss'

class Three extends Component {
  render(){
    return(
      <div className='Three'>
          <img src='./images/cat1.png'/>
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


export default Three