import './Post.css'
import PostModel from '../../../models/post/Post'
import profileServices from '../../../services/profile'
import { useNavigate } from 'react-router-dom'

interface PostProps{
    post: PostModel,
    isAllowActions?:boolean,
    remove? (id:string): void
}
export default function Post(props:PostProps):JSX.Element{ 

    const { title, body, createdAt, id} = props.post
    const { name }=props.post.user
    const navigate = useNavigate()

    async function deleteMe(){
        if(props.remove && confirm(`are you sure you want to delete "${title}"`)){
            try{
                await  profileServices.remove(id)
                props.remove(id)
            } catch(e){
                alert(e)
            }
        }
    }

    function editMe(){
        navigate(`/edit/${id}`)
    }


    return (
        <div className='Post'>
            
            <div>
                {title}
            </div>
            
            <div>
                by {name} at {createdAt}
            </div>
            
            <div>
                {body}
            </div>
            {props.isAllowActions &&
                <div>
                    <button onClick={editMe}>edit</button>
                    <button onClick={deleteMe}>Delete</button>
                </div>
            }
            
        </div>
    )
}