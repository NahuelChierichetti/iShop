import { useContext } from "react"
import CartContext from "../../context/CartContext"

const Cart = () => {
  const { cart } = useContext(CartContext)
  console.log('Cart: ', cart)

  return (
    <div className="container mx-auto my-14">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Producto
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
                </tr>
            </thead>
            {
              cart.map((prod) => (
                <tbody key={prod.id}>
                  <tr className="bg-white border-b dark:bg-gray-400 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {prod.nombre}
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
                  </tr>
                </tbody>
              ))
            }
        </table>
    </div>
    </div>
    

  )
}

export default Cart