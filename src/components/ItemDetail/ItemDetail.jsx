import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ categoria, imagen, nombre, stock, precio, id }) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem } = useContext(CartContext)

    const onAdd = (quantity) => {
        setQuantity(quantity)
        const newProduct = {
          id, nombre, precio
        }
        addItem(newProduct, quantity)

        console.log(`Agregaste ${quantity} productos`)
    }
  return (
    <div className='flex flex-col w-[50vw] mx-auto text-center my-14'>
        <img src={imagen} alt="" className='h-[400px] w-[400px] mx-auto'/>
        <h4 className='card-title'>{nombre}</h4>
        <h5 className='card-price'>U$s {precio}</h5>
        <p className='card-category'>{categoria}</p>
        {quantity > 0 ? <Link to={'/cart'} className='cart-btn'>Ir al carrito</Link> :
        <ItemCount initialValue={1} stock={stock} onAdd={onAdd}/>
        }
        
    </div>
  )
}

export default ItemDetail