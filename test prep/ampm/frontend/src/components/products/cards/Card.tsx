import Product from '../../../models/product/product'
import productsServices from '../../../services/products'
import './Card.css'



interface CardProps {
    product:Product
    removeProduct(id:string): void
}

export default function Card(props:CardProps): JSX.Element {


    const {
        id,
        name,
        expirationTime,
        price
    } = props.product

    async function Nuke(){
        try {
           await productsServices.remove(id)
           props.removeProduct(id)
           
        } catch (error) {
            alert(error)
        }
        
    }

    return (
        <div className='Card'>
            <h4>{name}</h4>
            <p>Expiration Time:{(new Date(expirationTime).toLocaleTimeString())}</p>
            <p>Price: {price}</p>
            <div>
                <button onClick={Nuke}>Nuke</button>
            </div>
        </div>
    )
}