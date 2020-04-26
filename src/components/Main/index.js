import React, {createElement} from 'react'
import { routeNode  } from 'react-router5'
import One from '../One'
import Two from '../Two'
import Three from '../Three'
import Four from '../Four'
import Five from '../Five'
import NotFound from '../NotFound'

const components = {
    'one': One,
    'two': Two,
    'three': Three,
    'four':Four,
    'five': Five,
}

function Main(props) {
    const { route } = props
    const segment = route.name.split('.')[0]

    return createElement(components[segment] || NotFound)
}

export default routeNode('')(Main)
