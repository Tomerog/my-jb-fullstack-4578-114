import { useEffect, useState } from 'react'
import followers from '../../../services/followers'
import './Followers.css'
import User from '../../../models/user/User'

export default function Followers():JSX.Element{

    const [users, setUsers] = useState<User[]>([])

    useEffect( ()=>{
        followers.getFollowers()
        .then(setUsers)
        .catch(alert)
    },[])

    return (
        <div className='followers'>
             <ul>
                {users.map(({id,name})=> <li key={id}>{name} </li>)}
            </ul>
        </div>
    )
}