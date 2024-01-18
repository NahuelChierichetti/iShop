import { useContext, useState, useEffect } from 'react'
import CartContext from '../../context/CartContext'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../main'
import Swal from 'sweetalert2';
import './Checkout.css'
import { useNavigate  } from 'react-router-dom';
 

const Checkout = () => {

    const [ user, setUser ] = useState({
        nombre: '',
        telefono: '',
        email: '',
        repetirEmail: ''
    })
    const [ emailMatch, setEmailMatch ] = useState(null)
    const [ formErrors, setFormErrors ] = useState({})
    const { cart, getTotal, clearCart } = useContext(CartContext)
    const [showErrors, setShowErrors] = useState(false);

    const navigate = useNavigate();

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name] : event.target.value
        }))
    }

    const validateEmail = () => {
        if (user.email !== user.repetirEmail){
            setEmailMatch(false);
        } else {
            setEmailMatch(true);
        }
      };
    
      const validateForm = () => {
        const errors = {};
        if (!user.nombre) {
          errors.nombre = 'El nombre es requerido';
        }
        if (!user.telefono) {
          errors.telefono = 'El teléfono es requerido';
        }
        if (!user.email) {
          errors.email = 'El email es requerido';
        }
        if (!user.repetirEmail) {
          errors.repetirEmail = 'El email es requerido';
        }
    
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
      };
    
      useEffect(() => {
        if (showErrors) {
          getOrderLogic();
          setShowErrors(false);
        }
      }, [emailMatch, showErrors]);
    
      const getOrderLogic = () => {
        if (validateForm() && emailMatch) {
          const order = {
            buyer: user,
            items: cart,
            total: getTotal()
          };
    
          const ordersCollection = collection(db, 'ordenes');
    
          addDoc(ordersCollection, order)
            .then(({ id }) => {
                clearCart()
                Swal.fire({
                    title: '¡Recibimos tu compra!',
                    text: `Código de seguimiento: ${id}`,
                    icon: 'success'
                }).then(() => {
                    navigate('/');
                });
            })
            .catch((error) => {
              console.error('Error al agregar la orden:', error);
              Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al procesar tu compra.',
                icon: 'error'
              });
            });
        }
      };
    
    const getOrder = (event) => {
        event.preventDefault();
        validateEmail();
        setShowErrors(true);
    };
 
    return (
        <>
      <div className="container-checkout">
        <div className='container-form'>
            <h2 className="font-bold text-3xl mb-8">Datos de facturación</h2>
            <form>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Nombre:</label>
                <input
                type="text"
                name="nombre"
                onChange={updateUser}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Ingrese su nombre"
                />
                {formErrors.nombre && <p className="text-red-500 text-sm">{formErrors.nombre}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Teléfono:</label>
                <input
                type="tel"
                name="telefono"
                onChange={updateUser}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Ingrese su teléfono"
                />
                {formErrors.telefono && <p className="text-red-500 text-sm">{formErrors.telefono}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Email:</label>
                <input
                type="email"
                name="email"
                onChange={updateUser}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Ingrese su email"
                />
                {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Repetir email:</label>
                <input
                type="email"
                name="repetirEmail"
                onChange={updateUser}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Repita su email"
                />
                {formErrors.repetirEmail && (
                <p className="text-red-500 text-sm">{formErrors.repetirEmail}</p>
                )}
                {!emailMatch && user.repetirEmail.trim() !== '' && (
                    <p className="text-red-500 text-sm">Los campos no coinciden</p>
                )}
            </div>
            <button
                onClick={(event) => getOrder(event)}
                className="px-10 py-3 w-[100%]  bg-[black] px-6 py-3 rounded-md text-white font-medium border-[1px] border-[black] hover:bg-white hover:text-black"
            >
                Realizar compra
            </button>
            </form>
        </div>
        <div className='container-detalle'>
            
            <h2 className="text-3xl font-bold mb-4">Detalle de la compra</h2>
            {cart.map((product) => (
                <div key={product.id} className="product-item flex">
                <img src={product.imagen} alt={product.nombre} className="h-[100px]" />
                <div className="product-details">
                    <p className="product-name">{product.nombre}</p>
                    <p className="product-detalle">Color: {product.color}</p>
                    <p className="product-detalle">Cantidad: {product.quantity}</p>
                </div>
                </div>
            ))}
        </div>
      </div>
    </>
    )
}

export default Checkout
