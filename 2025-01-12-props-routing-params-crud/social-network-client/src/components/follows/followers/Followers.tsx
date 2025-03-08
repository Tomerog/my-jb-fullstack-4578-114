import { useEffect, useState } from 'react'
import followersServices from '../../../services/followers'
import './Followers.css'
import User from '../../../models/user/User'
import Follow from '../follow/follow'

export default function Followers():JSX.Element{

    const [users, setUsers] = useState<User[]>([])

    useEffect( ()=>{
        followersServices.getFollowers()
        .then(setUsers)
        .catch(alert)
    },[])

    return (
        <div className='Following'>
                       {users.map(f => <Follow 
                                        key={f.id}
                                        user={f}
                                        ></Follow>)}
               </div>
    )
}