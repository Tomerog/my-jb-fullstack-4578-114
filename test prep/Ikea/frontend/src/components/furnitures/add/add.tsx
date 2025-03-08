import { useEffect, useState } from 'react'
import './add.css'
import Type from '../../../models/type/type'
import { useForm } from 'react-hook-form'
import Draft from '../../../models/furniture/draft'
import typesServices from '../../../services/type'
import furnituresServices from '../../../services/furniture'
import { useNavigate } from 'react-router-dom'

export default function Add():JSX.Element{

    const [ types , setTypes] = useState<Type[]>([])
    
    useEffect(() => {
        (async() => {
            try {
                const types = await typesServices.getAll()
                setTypes(types)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    const { register, handleSubmit, formState,} = useForm<Draft>()

    const navigate = useNavigate()
    async function submit(draft:Draft){
        try {
            await furnituresServices.add(draft)
            alert('added furniture')
            navigate('/furniture')
        } catch (error) {
            alert(error)
        }
    }
    return(
        <div className='Add'>
            <h1>Add Furniture</h1>
            <form onSubmit={handleSubmit(submit)}>
            <label>please insert name:</label>
                <select {...register('typeId')}>
                    <option value='' disabled selected> please select name...</option>
                    {types.map(({id, type}) => <option key={id} value={id}>{type}</option>)}              
                </select>
                <label>please insert dimension:</label>
                <input  placeholder='dimensions'{...register('dimension')}/>
                <label>please insert color:</label>
                <input  placeholder='color'{...register('color')}/>
                <label>please insert price:</label>
                <input type='number' placeholder='price'{...register('price')}/>
                <button>Add Furniture</button>
            </form>
        </div>
    )
}