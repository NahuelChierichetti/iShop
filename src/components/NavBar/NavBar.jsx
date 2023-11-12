import './NavBar.css'
//import { FaShoppingCart } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa6'
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='container-fluid mx-auto bg-primary'>
      <header className='top-0 z-50 container mx-auto'>
        <nav className='flex items-center justify-between p-6 lg:px-8'>
          <div className="flex items-center">
            <FaApple />
            <a href="#" className='-m-1.5 p-1.5'>
              <span className='text-primary font-[600] text-2xl'>iShop</span>
            </a>
          </div>
          <div className='flex items-center lg:flex-5'>
            <ul className='flex space-x-12'>
              <li><a href="#">Store</a></li>
              <li><a href="#">Mac</a></li>
              <li><a href="#">iPad</a></li>
              <li><a href="#">iPhone</a></li>
              <li><a href="#">Watch</a></li>
              <li><a href="#">AirPods</a></li>
              <li><a href="#">TV & Home</a></li>
              <li><a href="#">Accesorios</a></li>
              <li></li>
            </ul>
          </div>
          <div className='cart-icon'>
            <CiShoppingCart className='text-3xl' />
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar