import { ChangeEvent, useEffect, useState } from 'react'
import './List.css'
import Category from '../../../models/category/category'
import Product from '../../../models/product/product'
import CategoriesServices from '../../../services/categories'
import Card from '../cards/Card'
import productsServices from '../../../services/products'

export default function List(): JSX.Element {

    const [ categories, setCategories] = useState<Category[]>([])
    const [ products, setProducts ] = useState<Product[]>([])

    useEffect(()=>{
        (async () => {
            try {
                const categories = await CategoriesServices.getAll()
                setCategories(categories)
            } catch (error) {
                alert(error)
            }
        })()
    },[])

    async function categoryChanged(event:ChangeEvent<HTMLSelectElement>){
        try {
            const selectedCategoryId = event.currentTarget.value
            const products = await productsServices.getPerCategory(selectedCategoryId)
            setProducts(products)
        } catch (error) {
            alert(error)
        }
        
    }

    function removeProduct(id:string){
        setProducts(products.filter(p =>p.id !== id))
    }

    return (
        <div className='List'>
            <select onChange={categoryChanged}>
                <option value= '' disabled selected> please select category...</option>
                {categories.map(({ id, name}) => <option key={id} value={id}>{name}</option> )}
            </select>

            <div className='CardContainer'>
            {products.map(product => <Card key={product.id} product={product} removeProduct={removeProduct}/> )}
            </div>


        </div>
    )
}