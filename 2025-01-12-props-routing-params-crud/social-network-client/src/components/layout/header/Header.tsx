import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header():JSX.Element{
    return (
        <div className='Header'>
            <div>
                Logo
            </div>
            <div>
                <nav>
                    <NavLink to="/profile">profile</NavLink>
                    <NavLink to="/feed">feed</NavLink>
                    <NavLink to="/search">search</NavLink>
                </nav>
            </div>
        </div>
    )
}