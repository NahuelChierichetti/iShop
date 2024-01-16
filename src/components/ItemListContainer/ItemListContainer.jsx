import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'
import { FaApple } from 'react-icons/fa6'
import { collection, where, query, getDocs } from "firebase/firestore"
import { db } from '../../main'

const ItemListContainer = ({ title }) => {

  const [ data, setData ] = useState([])
  const { categoryId } = useParams()
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {

    setLoading(true)
    const getData = async () => {

      const queryRef = !categoryId ? collection(db, 'productos') :
      query(collection(db, 'productos'), where('categoria', '==', categoryId))

      const response = await getDocs(queryRef)

      const products = response.docs.map((doc) => {
        const newProduct = {
          ...doc.data(),
          id: doc.id
        }
        return newProduct
      })
      setTimeout(() => {
        setData(products)
        setLoading(false)
      }, 1000)
    }
    getData()
  }, [categoryId])

  return (
    <div className="itemListContainer">
      {loading ? (
        <div>
          <div className="flex items-center justify-center">
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