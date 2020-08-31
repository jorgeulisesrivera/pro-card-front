import React,{useEffect} from 'react'
import {Router} from '@reach/router'
import { useDispatch } from 'react-redux'
import {fetchUsersAction} from '../common/actions'
import {Users} from '../container/Users'
import {User} from '../container/User'

export const Navigation = ()=>{

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersAction());
    }, []);

    return(
        <Router>
            <Users path='/'/>
            <User path='/user/:id' create={false}/>
            <User path='/user/nuevo' create={true}/>
        </Router>
    )
}