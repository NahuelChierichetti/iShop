import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { FaRegTrashCan } from "react-icons/fa6";
import './Cart.css'
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, getTotal, removeItem, clearCart } = useContext(CartContext)
  console.log('Cart: ', cart)

  if(cart.length === 0) {
    return (
      <div className="empty-message">
        <h2>Tu carrito de compras está vacio</h2>
        <Link to='/'>Agregar productos</Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto my-14">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Producto
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Color
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Cantidad
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Precio unidad
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Subtotal
                    </th>
                    <th scope="col" className="px-6 py-3">
                        
                    </th>
                </tr>
            </thead>
            {
              cart.map((prod) => (
                <tbody key={prod.id}>
                  <tr className="bg-white border-b dark:bg-gray-400 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <img src={prod.imagen} alt={prod.nombre} className="imgCart"></img>
                      </th>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {prod.nombre}
                      </th>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {prod.color}
                      </th>
                      <td className="px-6 py-4">
                          {prod.quantity}
                      </td>
                      <td className="px-6 py-4">
                        USD$ {prod.precio}
                      </td>
                      <td className="px-6 py-4">
                        USD$ {prod.quantity * prod.precio} 
                      </td>
                      <td className="px-6 py-4">
                        <button onClick={() => removeItem(prod.id)}><FaRegTrashCan className="btn-delete"/></button> 
                      </td>
                  </tr>
                </tbody>
              ))
            }
            <tfoot>
            <tr>
              <td className="px-6 py-4" colSpan="3">
                <button onClick={() => clearCart()}>Vaciar carrito</button>
              </td>
              <td className="px-6 py-4" colSpan="3">
                <strong>Total:</strong>
              </td>
              <td className="px-6 py-4">
                <strong>USD$ {getTotal()}</strong>
              </td>
            </tr>
          </tfoot>
        </table>
    </div>
    </div>
    

  )
}

export default Cart