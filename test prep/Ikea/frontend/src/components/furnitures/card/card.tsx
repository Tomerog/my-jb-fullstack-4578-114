import Furniture from '../../../models/furniture/furniture'
import './card.css'

interface CardProps{
    furniture:Furniture
    
}

export default function Card(props:CardProps):JSX.Element{
    const{
        dimension,
        color,
        price,
        type:{type}
    } = props.furniture
    return (
        <div className='Card'>
            <p>{type}</p>
            <p>{dimension}</p>
            <p>{color}</p>
            <p>{price}</p>
        </div>
    )
}