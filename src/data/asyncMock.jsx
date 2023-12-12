import Iphone15 from '../assets/imgProducts/iphone15.png'
import Iphone13 from '../assets/imgProducts/iphone13.jpg'
import IpadPro from '../assets/imgProducts/ipadPro.jpg'
import IpadAir from '../assets/imgProducts/ipadAir.jpg'
import AppleWatch from '../assets/imgProducts/applewatch.png'
import MacBookAir from '../assets/imgProducts/macbook.jpg'
import HomePod from '../assets/imgProducts/homepod.png'
import AirPods from '../assets/imgProducts/airpods.png'
import AppleTV from '../assets/imgProducts/appletv.png'

const productos = [
    {
        "id": 1,
        "nombre": "iPhone 15",
        "categoria": "iPhone",
        "stock": 10,
        "imagen": Iphone15,
        "precio": 1099
      },
      {
        "id": 2,
        "nombre": "iPhone 13",
        "categoria": "iPhone",
        "stock": 5,
        "imagen": Iphone13,
        "precio": 890
      },
      {
        "id": 3,
        "nombre": "iPad Pro (2023)",
        "categoria": "iPad",
        "stock": 12,
        "imagen": IpadPro,
        "precio": 1199
      },
      {
        "id": 4,
        "nombre": "iPad Air (2023)",
        "categoria": "iPad",
        "stock": 1,
        "imagen": IpadAir,
        "precio": 799
      },
      {
        "id": 5,
        "nombre": "Apple Watch Series 8",
        "categoria": "Apple Watch",
        "stock": 2,
        "imagen": AppleWatch,
        "precio": 599
      },
      {
        "id": 6,
        "nombre": "MacBook Air (2023)",
        "categoria": "Mac",
        "stock": 9,
        "imagen": MacBookAir,
        "precio": 599
      },
      {
        "id": 7,
        "nombre": "HomePod mini (2023)",
        "categoria": "TVHome",
        "stock": 1,
        "imagen": HomePod,
        "precio": 899
      },
      {
        "id": 8,
        "nombre": "AirPods Pro (2023)",
        "categoria": "AirPods",
        "stock": 6,
        "imagen": AirPods,
        "precio": 579
      },
      {
        "id": 9,
        "nombre": "Apple TV 4K (2023)",
        "categoria": "TVHome",
        "stock": 2,
        "imagen": AppleTV,
        "precio": 299
      }
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export const getProductById = (id) => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      const productoFiltrado = productos.find((prod) => prod.id === parseInt(id))
      resolve(productoFiltrado);
    }, 2000)
  })
}

export const getProductByCategory = (category) => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      const productosFiltrados = productos.filter((prod) => prod.categoria === category)
      resolve(productosFiltrados)
    }, 2000)
  })
}