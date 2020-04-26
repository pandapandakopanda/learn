import React, {Component} from 'react'
import './index.scss'
import cat1 from '../images/cat/cat1.png'

class One extends Component {
  render(){
    return(
      <div className='one'>
          <img id='cat' src={cat1} alt='koTUk' />
          <p>
          You can connect your components using three different methods:<br/>
          Higher-order components: <code>withRouter, withRoute and routeNode</code><br/>
          Render props: <code>Router, Route and RouteNode</code><br/>
          Hooks: <code>useRouter, useRoute and useRouteNode</code>
          </p>
        </div>
    )
  }
}


export default One