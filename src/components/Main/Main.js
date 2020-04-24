import React from 'react'
import { useRouteNode } from 'react-router5'
import One from './One'
import Two from './Two'
import Three from './Three'
import Four from './Four'
import Five from './Five'

function Main() {
    const { route } = useRouteNode('')
    const topRouteName = route.name.split('.')[0]

    if (topRouteName === 'one') {
        return <One />
    }

    if (topRouteName === 'two') {
        return <Two />
    }
    if (topRouteName === 'three') {
        return <Three />
    }

    if (topRouteName === 'four') {
        return <Four />
    }

    if (topRouteName === 'five') {
        return <Five />
    }

    return <NotFound />
}

export default Main
