import './NavBar.css'
//import { FaShoppingCart } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa6'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container-fluid mx-auto bg-primary'>
      <header className='top-0 z-50 container mx-auto'>
        <nav className='flex items-center justify-between p-6 lg:px-8'>
          <div className="flex items-center">
            <FaApple />
            <Link to={'/'} className='-m-1.5 p-1.5'>
              <span className='text-primary font-[600] text-2xl'>iShop</span>
            </Link>
          </div>
          <div className='flex items-center lg:flex-5'>
            <ul className='flex space-x-12'>
              <li><Link to={'/'}>Store</Link></li>
              <li><Link to={'/category/Mac'}>Mac</Link></li>
              <li><Link to={'/category/iPad'}>iPad</Link></li>
              <li><Link to={'/category/iPhone'}>iPhone</Link></li>
              <li><Link to={'/category/AirPods'}>AirPods</Link></li>
              <li><Link to={'/category/TVHome'}>TV & Home</Link></li>
            </ul>
          </div>
          <div className='cart-icon'>
            <Link to={'/cart'}>
              <CartWidget />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar