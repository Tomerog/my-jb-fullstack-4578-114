import { useEffect, useState } from 'react'
import feed from '../../../services/feed'
import './Feed.css'
import Post from '../../../models/post/Post'

export default function Feed():JSX.Element{
    const [posts, setPosts] = useState<Post[]>([])

    useEffect( ()=>{
        feed.getFeed()
        .then(setPosts)
        .catch(alert)
    },[])
    
    return (
        <div className='Feed'>
            
            
            <ul>
            {posts.map(({id,title})=> <li key={id}>{title}</li>)}
            </ul>
        </div>
    )
}