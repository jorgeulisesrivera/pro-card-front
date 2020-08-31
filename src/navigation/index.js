import React from 'react'
import {Router} from '@reach/router'
import {Users} from '../pages/Users'

export const Navigation = ()=>{
    return(
        <Router>
            <Users path='/'/>
            <Users path='/user/:id'/>
        </Router>
    )
}