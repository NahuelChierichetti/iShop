import React, { useContext, useState, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ categoria, imagen, nombre, stock, precio, id, descripcion, color }) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem } = useContext(CartContext)
    const [ loading, setLoading ] = useState(true)
    const [selectedColor, setSelectedColor] = useState(null);
    const [verificacionColor, setVerificacionColor ] = useState(false)
 
    useEffect(() => {
      const cargaDetalle = () => {
          setTimeout(() => {
              setLoading(false);
          }, 3000);
      };

      cargaDetalle();
    }, []);


    const onAdd = (quantity) => {
        if(selectedColor === null){
            setVerificacionColor(true)
            return
        } else {
            setQuantity(quantity)
            const newProduct = {
                id, nombre, precio, imagen, color: selectedColor
            }
            addItem(newProduct, quantity)
    
            console.log(`Agregaste ${quantity} productos`)
        } 
    }

    const handleColorClick = (selectedColor) => {
        console.log(selectedColor)
        setSelectedColor(selectedColor)
    };

    return (
        <div className={`flex mx-auto my-14 ${loading ? 'loading' : ''}`}>
            {loading ? (
                <div className="mx-auto text-center mt-4">
                    <div className="border-t-4 border-black-700 border-solid h-8 w-8 animate-spin mx-auto my-12"></div>
                </div>
            ) : (
                <div className='flex mx-auto my-14'>
                    <div className="w-[50vw] container-img">
                        <img src={imagen} alt={nombre} className='h-[400px] w-[400px] imgDetail' />
                    </div>
                    <div className="w-[50vw] container-detail">
                        <h4 className='card-title'>{nombre}</h4>
                        <h5 className='card-price'>$ {precio}</h5>
                        <p className='card-descripcion'>{descripcion}</p>
                        <div className='card-colores'>
                            {color && color.map((colorOption, index) => (
                                <button
                                        key={index}
                                        className={`color-option ${selectedColor === colorOption ? 'selected' : ''}`}
                                        id={colorOption.trim().replace(/\s+/g, '')}
                                        onClick={() => handleColorClick(colorOption)}
                                    >
                                        {colorOption}
                                    </button>
                            ))}
                        </div>
                        {verificacionColor === true && (
                            <p className="text-red-400 my-2">Por favor, selecciona un color antes de agregar al carrito.</p>
                        )}
                        {quantity > 0 && selectedColor !== null ? (
                            <div className='container-cart-btn'><Link to={'/cart'} className='cart-btn'>Ir al carrito</Link></div>
                        ) : (
                            <ItemCount initialValue={1} stock={stock} onAdd={onAdd} />
                        )}
                    </div>
                </div>
            )}
        </div>
  );
};

export default ItemDetail