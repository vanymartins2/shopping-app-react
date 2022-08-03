import { Row, Col } from 'react-bootstrap'
import { StoreItem } from '../components/StoreItem'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { motion } from 'framer-motion'

export function Store() {
  const { storeItems } = useShoppingCart()
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <h2 className="mb-4">Shopping</h2>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(storeItem => (
          <Col key={storeItem.id}>
            <StoreItem {...storeItem} />
          </Col>
        ))}
      </Row>
    </motion.div>
  )
}
