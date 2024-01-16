import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../main'

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({})
    const { itemId } = useParams()


    useEffect (() => {
        const getProduct = async() => {
          const queryRef = doc(db, 'productos', itemId)
          
          const response = await getDoc(queryRef)
          
          const newProduct = {
            ...response.data(),
            id: response.id
          }

          setTimeout(() => {
            setProduct(newProduct)
          }, 500)
        }
        getProduct()
    }, [itemId])
    
  return (
    <div>
        <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer