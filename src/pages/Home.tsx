import { SetStateAction, useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { motion } from 'framer-motion'

type ProductProps = {
  id: string
  imgUrl: string
}

export function Home() {
  const API_URL = 'http://localhost:3000/product'
  const [index, setIndex] = useState(0)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(API_URL)
      const data = await response.json()
      setProducts(data)
    }
    getProducts()
  }, [])

  const handleSelect = (selectedIndex: SetStateAction<number>, e: any) => {
    setIndex(selectedIndex)
  }

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <h2>Welcome!</h2>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {products.map((product: ProductProps) => {
          return (
            <Carousel.Item key={product.id} className="carousel-item">
              <img
                className="d-block w-100"
                src={product.imgUrl}
                alt="First slide"
              />
              <Carousel.Caption>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </motion.div>
  )
}
