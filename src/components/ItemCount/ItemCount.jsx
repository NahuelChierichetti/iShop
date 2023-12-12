import useCounter from "../../hooks/useCounter"
import './ItemCount.css'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const { count, increment, decrement } = useCounter(initialValue, stock)
  return (
    <div className="mx-auto mt-6">
        <div className="flex justify-center">
            <button onClick={decrement} className="card-btn-detail">-</button>
            <h3 className="contador">{count}</h3>
            <button onClick={increment} className="card-btn-detail">+</button>
        </div>
        <div className="flex mx-auto mt-6 justify-center">
            <button onClick={() => onAdd(count)} className="add-cart">Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount