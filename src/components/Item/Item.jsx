import './Item.css';
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, imagen, categoria }) => {
  return (
    <div className='item'>
      <div className="card">
        <img className="card-image" src={imagen} alt={nombre} />
        <div className="card-content">
          <h2 className="card-title">{nombre}</h2>
          <button>
            <Link to={`/product/${id}`} className="card-btn">Más información</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;