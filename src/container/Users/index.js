import React,{Fragment,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "@reach/router"
import {Row} from '../../components/Row'

export const Users = ()=>{
    const users         = useSelector(state => state.reducersUsers.users)
    const loadingUsers  = useSelector(state => state.reducersUsers.loadingUsers)
    const navigate = useNavigate();

    return(
        <Fragment>
            <h1>Listado de usuarios</h1>
            <hr></hr>

            <div className="row">
                <div className="col text-right">
                    <button className="btn btn-primary" onClick={()=>{navigate('/user/nuevo')}}>
                        <i className="fa fa-plus"></i>
                        Agregar
                    </button>
                </div>
            </div>

            {users.length>0 && 
            <table className="table mt-3 animated fadeIn faster">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Username</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Opciones</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user,i)=><Row user={user} key={i} index={i+1}/>)}
                </tbody>
            </table>
            }

            {(users.length==0 && loadingUsers == false) && 
            <div className="alert alert-warning text-center mt-3 animated fadeIn faster">
                <h4 className="alert-headding">no hay registros</h4>
                <p>
                    <i className="fa fa-exclamation fa-2x"></i>
                </p>
            </div>
            }

            {loadingUsers && 
            <div className="alert alert-info text-center mt-3 animated fadeIn faster">
                <h4 className="alert-headding">Cargando</h4>
                <p>
                <i className="fa fa-sync-alt fa-spin fa-2x"></i>
                </p>
                <p className="mb-0">
                Espere por favor
                </p>
            </div>
            }

        </Fragment>
    );
}