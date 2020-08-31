import * as GRAPHQL from './graphql';
import {client} from './client'

export function apiFetchUsers(){
    return new Promise((resolve, reject) => {
        client
        .query({query: GRAPHQL.getUsers})
        .then(data => {
            resolve(data.data.getUsers);
        })
        .catch(err=>{
            reject(err)
        });
    });
}

export function apiCreateUser(user){
    return new Promise((resolve, reject) => {
        client
        .mutate({mutation: GRAPHQL.createUser,variables:{user}})
        .then(data => {
            console.log(data.data.createUser);
            delete data.data.createUser.__typename
            resolve(data.data.createUser);
        })
        .catch(err=>{
            reject(err)
        });
    });
}

export function apiUpdateUser(user,id){
    return new Promise((resolve, reject) => {
        client
        .mutate({mutation: GRAPHQL.updateUser,variables:{user,id}})
        .then(data => {
            delete data.data.updateUser.__typename
            resolve(data.data.updateUser);
        })
        .catch(err=>{
            reject(err)
        });
    });
}
