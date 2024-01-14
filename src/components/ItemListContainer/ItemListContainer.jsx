import { useEffect, useState } from "react"
import { getProductByCategory, getProducts } from "../../data/asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'
import { FaApple } from 'react-icons/fa6'

const ItemListContainer = ({ title }) => {

  const [ data, setData ] = useState([])
  const { categoryId } = useParams()
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {

    setLoading(true)

    if(categoryId) {
      getProductByCategory(categoryId)
        .then((prod) => {
          setData(prod);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      getProducts()
        .then((prod) => {
          setData(prod);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [categoryId])

  return (
    <div className="itemListContainer">
      {loading ? (
        <div>
          <div className="flex items-center justify-center">
            <span className='text-primary font-[600] text-2xl mr-2 my-5'>Bienvenidos a </span>
            <FaApple />
            <span className='text-primary font-[600] text-2xl'>{title}</span>
          </div>
          <div className="mx-auto text-center mt-4">
            <div className="border-t-4 border-black-700 border-solid h-8 w-8 animate-spin mx-auto my-12"></div>
          </div>
        </div>
      ) : (
        <ItemList data={data} />
      )}
    </div>
  );
}

export default ItemListContainer