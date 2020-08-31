import React from 'react'
import {Tr} from './style'
import { useNavigate } from "@reach/router"

export const Row = ({user,index})=>{
    const navigate = useNavigate();
    return(
        <Tr>
                    <th scope="row">{index}</th>
                    <td>{user.name}</td>
                    <td>{user.lastname}</td>
                    <td>{user.description}</td>
                    <td>{user.username}</td>
                    <td>{user.phone}</td>
                    <td>
                        <button className="btn btn-info mr-1" onClick={()=>{navigate('/user/'+user.id)}}>
                            <i className="fa fa-pen"></i>
                        </button>
                        {/*<button className="btn btn-danger">
                            <i className="fa fa-trash"></i>
                        </button>*/}
                    </td>
        </Tr>
    )
}