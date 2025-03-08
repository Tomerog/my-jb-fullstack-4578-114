import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {




    return (
        <div className='Header'>
            <div>
                Logo
            </div>  
            <div>
                <nav>
                    <NavLink to="/products/list">Products</NavLink>
                    <NavLink to="/products/add">Add Products</NavLink>
                </nav>
            </div>          
        
        </div>
    )
}