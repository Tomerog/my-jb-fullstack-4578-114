import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {

    return (
        <div className='Header'>
            <div>
                Ikea Website
            </div>  
            <div>
                <nav>
                    <NavLink to="/furniture">furniture list</NavLink>
                    <NavLink to="/add-furniture">add furniture</NavLink>
                </nav>
            </div>          
           
        </div>
    )
}