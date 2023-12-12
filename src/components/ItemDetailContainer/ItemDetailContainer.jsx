import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../data/asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({})
    const { itemId } = useParams()


    useEffect (() => {
        getProductById(itemId)
            .then((prod) => {
              setProduct(prod)  
            })
    }, [itemId])
    console.log(product)
  return (
    <div>
        <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer