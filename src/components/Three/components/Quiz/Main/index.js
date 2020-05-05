
import React, { createElement } from 'react'
import { routeNode, withRoute } from 'react-router5'
import First from '../questions/First'
import Second from '../questions/Second'
import Third from '../questions/Third'
import Result from '../Result'


const components = {
  first: First,
  second: Second,
  third: Third,
  result: Result,
}

function Main(props) {
  console.log(props.current)
  const segment = props.current
  return createElement(components[segment] || First)
}

export default withRoute(Main)// routeNode('')(Main)
