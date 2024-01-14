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
        "nombre": "Apple iPhone 15 Pro Max",
        "categoria": "iPhone",
        "descripcion": "La última innovación de Apple redefine la experiencia móvil con características revolucionarias. Disfruta de un rendimiento sin igual, una cámara aún más avanzada y una pantalla espectacular. El iPhone 15 lleva la tecnología a nuevos límites, ofreciendo una experiencia única para usuarios exigentes.",
        "color": ["Silver", "Rose Gold", "Blue", "Black"],
        "memoria": ["256GB", "512GB", "1TB"],
        "stock": 10,
        "imagen": Iphone15,
        "precio": 1099
      },
      {
        "id": 2,
        "nombre": "Apple iPhone 13 Pro",
        "categoria": "iPhone",
        "descripcion": "El iPhone 13 presenta una combinación perfecta de estilo y rendimiento. Con un diseño elegante y características innovadoras, este smartphone redefine la experiencia de usuario. Disfruta de una potente cámara, un rendimiento excepcional y opciones de almacenamiento que se adaptan a tus necesidades.",
        "color": ["Black", "Blue"],
        "memoria": ["256GB", "512GB", "128GB"],
        "stock": 5,
        "imagen": Iphone13,
        "precio": 890
      },
      {
        "id": 3,
        "nombre": "iPad Pro (2023)",
        "categoria": "iPad",
        "descripcion": "El iPad Pro (2023) combina rendimiento y portabilidad en un solo dispositivo. Con potentes características y un diseño elegante, esta tablet redefine la forma en que interactúas con la tecnología.",
        "color": ["Silver", "Space Gray"],
        "memoria": ["128GB", "256GB", "512GB"],
        "stock": 12,
        "imagen": IpadPro,
        "precio": 1199
      },
      {
        "id": 4,
        "nombre": "iPad Air (2023)",
        "categoria": "iPad",
        "descripcion": "El iPad Air (2023) ofrece un equilibrio perfecto entre rendimiento y portabilidad. Con un diseño delgado y potentes capacidades, esta tablet es ideal para el uso diario.",
        "color": ["Silver", "Gold", "Space Gray"],
        "memoria": ["128GB", "256GB"],
        "stock": 1,
        "imagen": IpadAir,
        "precio": 799
      },
      {
        "id": 5,
        "nombre": "Apple Watch Series 8",
        "categoria": "Apple Watch",
        "descripcion": "El Apple Watch Series 8 lleva la tecnología de los wearables a nuevas alturas. Con características avanzadas y un diseño moderno, este reloj inteligente mejora tu estilo de vida.",
        "color": ["Silver", "Gold", "Space Gray"],
        "memoria": ["N/A"],
        "stock": 2,
        "imagen": AppleWatch,
        "precio": 599
      },
      {
        "id": 6,
        "nombre": "MacBook Air (2023)",
        "categoria": "Mac",
        "descripcion": "El MacBook Air (2023) redefine la experiencia de la computación portátil. Con un diseño ultrafino y un rendimiento potente, esta laptop es perfecta para profesionales en movimiento.",
        "color": ["Silver", "Space Gray"],
        "memoria": ["256GB", "512GB"],
        "stock": 9,
        "imagen": MacBookAir,
        "precio": 599
      },
      {
        "id": 7,
        "nombre": "HomePod mini (2023)",
        "categoria": "TVHome",
        "descripcion": "El HomePod mini (2023) ofrece un sonido envolvente en un tamaño compacto. Con tecnología avanzada de audio, este altavoz inteligente transforma tu hogar en un lugar lleno de experiencias auditivas inigualables.",
        "color": ["Space Gray", "White"],
        "memoria": ["N/A"],
        "stock": 1,
        "imagen": HomePod,
        "precio": 899
      },
      {
        "id": 8,
        "nombre": "AirPods Pro (2023)",
        "categoria": "AirPods",
        "descripcion": "Los AirPods Pro (2023) ofrecen una experiencia auditiva incomparable. Con cancelación de ruido y un ajuste personalizado, estos auriculares inalámbricos llevan la calidad de sonido a un nuevo nivel.",
        "color": ["White"],
        "memoria": ["N/A"],
        "stock": 6,
        "imagen": AirPods,
        "precio": 579
      },
      {
        "id": 9,
        "nombre": "Apple TV 4K (2023)",
        "categoria": "TVHome",
        "descripcion": "El Apple TV 4K (2023) redefine el entretenimiento en el hogar. Con calidad de imagen superior y acceso a una amplia gama de contenidos, este dispositivo transforma tu televisor en una experiencia multimedia completa.",
        "color": ["Black"],
        "memoria": ["N/A"],
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