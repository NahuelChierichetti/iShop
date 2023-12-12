import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ data }) => {
  return (
    <div className='container item-list'>
        {data.map((productos) => (
            <div key={productos.id}>
                <Item {...productos} />
            </div>
        ))}
    </div>
  )
}

export default ItemList