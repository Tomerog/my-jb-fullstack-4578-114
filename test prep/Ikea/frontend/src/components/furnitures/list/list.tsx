import { useEffect, useState } from 'react'
import './list.css'
import Furniture from '../../../models/furniture/furniture'
import Card from '../card/card'
import furnituresServices from '../../../services/furniture'

export default function List():JSX.Element{


    const [ furnitures, setFurnitures  ] = useState<Furniture[]>([])


    useEffect(() => {
        (async() => {
            try {
                const furnitures = await furnituresServices.getAll()
                setFurnitures(furnitures)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])


    return(
        <div className='List'>
            <div className='CardContainer'>
            {furnitures.map(furniture => <Card key={furniture.id} furniture={furniture}/>)}
            </div>
        </div>
    )
}