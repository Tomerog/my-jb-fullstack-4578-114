import { useEffect, useState } from 'react'
import following from '../../../services/following'
import './Following.css'
import User from '../../../models/user/User'

export default function Following():JSX.Element{

    const [users, setUsers] = useState<User[]>([])

    useEffect( ()=>{
        following.getFollowing()
        .then(setUsers)
        .catch(alert)
    },[])

    return (
        <div className='Following'>
             <ul>
                {users.map(({id,name})=> <li key={id}>{name} </li>)}
            </ul>
        </div>
    )
}