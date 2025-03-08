import { useEffect, useState } from 'react'
import followingServices from '../../../services/following'
import './Following.css'
import User from '../../../models/user/User'
import Follow from '../follow/follow'

export default function Following():JSX.Element{

    const [users, setUsers] = useState<User[]>([])

    useEffect( ()=>{
        followingServices.getFollowing()
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