import { useEffect, useState } from 'react'
import feed from '../../../services/feed'
import './Feed.css'
import PostModel from '../../../models/post/Post'
import Post from '../post/Post'

export default function Feed():JSX.Element{

    const [posts, setPosts] = useState<PostModel[]>([])
    
    useEffect(() => {
        document.title = `SN - Profile`;
    }, []);

    useEffect( ()=>{
        feed.getFeed()
        .then(setPosts)
        .catch(alert)
    },[])
    
    
    return (
        <div className='Feed'>
            {posts.map(p => <Post 
                                key={p.id}
                                post={p}
                                />)}
        </div>
    )
}