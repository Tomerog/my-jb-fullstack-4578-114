import { useEffect, useState } from 'react'
import './Add.css'
import CategoriesServices from '../../../services/categories'
import Category from '../../../models/category/category'
import { useForm } from 'react-hook-form'
import Draft from '../../../models/product/draft'
import productsServices from '../../../services/products'
import { useNavigate } from 'react-router-dom'



 
export default function Add(): JSX.Element {

    const [ categories, setCategories] = useState<Category[]>([])

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

    const navigate = useNavigate()
    const { register, handleSubmit } =  useForm<Draft>()

    async function submit(draft:Draft){
        try{
            await productsServices.add(draft)
            alert('added product')
            navigate('/products/list')
        } catch (e){
            alert(e)
        }
    }
    return (
        <div className='Add'>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder='product name' {...register('name')}/>

                <input type="number" placeholder='price' {...register('price')}/>

                <select {...register('categoryId')}>
                    <option value= '' disabled selected> please select category...</option>
                    {categories.map(({ id, name}) => <option key={id} value={id}>{name}</option> )}
                </select>

                <input type="datetime-local" placeholder='production time' {...register('productionTime')}/>

                <input type="datetime-local" placeholder='expiration time' {...register('expirationTime')}/>

                <button> Add Product</button>
            </form>
        </div>
    )
}