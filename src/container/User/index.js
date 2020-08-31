import React,{Fragment,useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {createUserAction,updateUserAction} from '../../common/actions'
import { useNavigate } from "@reach/router"

export const User = ({create,id})=>{

    const users = useSelector(state => state.reducersUsers.users)

    let user = {
        name:"",
        lastname:"",
        description:"",
        username:"",
        phone:""
    }

    if(create==false && users.length>0){
        user = users.filter(row=>row.id==id)[0];
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState(user.name);
    const [lastName, setLastName] = useState(user.lastname);
    const [description, setDescription] = useState(user.description);
    const [username, setUsername] = useState(user.username);
    const [phone, setPhone] = useState(user.phone);

    const save = ()=>{
        const user = {
            name,
            lastname:lastName,
            description,
            username,
            phone
        }
        if(create){
            dispatch(createUserAction(user))
            navigate('/')
        }else{
            dispatch(updateUserAction(user,parseInt(id)));
            navigate('/')
        }
    }

    return(
        <Fragment>

        <h1>Usuario</h1>

        <hr/>

        <div className="row">
            <div className="col text-right">
                <button className="btn btn-danger" onClick={()=>{navigate('/')}}>
                    <i className="fa fa-arrow-left"></i>
                    Regresar
                </button>
            </div>
        </div>


        <form>

            <div className="form-group">
                <label>Nombre</label>
                <input type="text" className="form-control" placeholder="Nombre" name="name" autoComplete={"off"}
                value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>

            <div className="form-group">
                <label>Apellido</label>
                <input type="text" className="form-control" placeholder="Apellido" name="lastname" autoComplete={"off"}
                value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
            </div>

            <div className="form-group">
                <label>Descripción</label>
                <input type="text" className="form-control" placeholder="Descripción" name="description" autoComplete={"off"}
                value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            </div>

            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" name="username" autoComplete={"off"} 
                value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            </div>

            <div className="form-group">
                <label>Telefono</label>
                <input type="text" className="form-control" placeholder="Telefono" name="phone" autoComplete={"off"} 
                value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
            </div>

        </form>

        <div className="form-group text-center">
            <button className="btn btn-primary w-25" onClick={save}>
                <i className="fa fa-save"></i>
                Guardar
            </button>
        </div>
        </Fragment>
    );

}