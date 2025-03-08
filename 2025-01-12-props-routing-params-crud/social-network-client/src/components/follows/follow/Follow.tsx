import User from '../../../models/user/User'
import './Follow.css'
import profilePicSource from '../../../assets/images/profilePicPlaceholder.jpg'
interface FollowProps{
    user: User
}
export default function Follow(props:FollowProps):JSX.Element{

    const { name } = props.user

    return(
        <div className='Follow'>
            <div>
                <img src={profilePicSource}></img>
            </div>
            <div>
                {name}
            </div>
            <button></button>
        </div>
    )
}