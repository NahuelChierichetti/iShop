import { CiShoppingCart } from "react-icons/ci";

function CartWidget() {
  return (
    <div className="flex text-center">
      <span className="flex"><CiShoppingCart className='text-3xl'/>0</span>
    </div>
  )
}

export default CartWidget
