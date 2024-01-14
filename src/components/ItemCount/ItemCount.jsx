import useCounter from "../../hooks/useCounter"
import './ItemCount.css'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const { count, increment, decrement } = useCounter(initialValue, stock)
  return (
    <div className="flex mx-auto mt-10">
      <button onClick={decrement} className="card-btn-detail">-</button>
      <h3 className="contador">{count}</h3>
      <button onClick={increment} className="card-btn-detail">+</button>
      <button onClick={() => onAdd(count)} className="add-cart">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount