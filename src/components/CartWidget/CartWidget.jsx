import { CiShoppingCart } from "react-icons/ci";
import CartContext from "../../context/CartContext"
import { useContext } from "react";

function CartWidget() {

  const { getTotalProduct } = useContext(CartContext)

  return (
    <div className="flex text-center">
      <span className="flex"><CiShoppingCart className='text-3xl'/>{getTotalProduct()}</span>
    </div>
  )
}

export default CartWidget
