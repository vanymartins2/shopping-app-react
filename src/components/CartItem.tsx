import { Button, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utilities/formatCurrency'

type CartItem = {
  id: string
  quantity: number
}
export function CartItem({ id, quantity }: CartItem) {
  const { removeFromCart, storeItems } = useShoppingCart()
  const item = storeItems.find(item => item.id === id)
  if (item == null) return null
  return (
    <Stack direction="horizontal" className="d-flex align-items-center" gap={2}>
      <img
        src={item.imgUrl}
        style={{
          width: '125px',
          height: '75px',
          objectFit: 'cover',
          borderRadius: '2px'
        }}
      />
      <div className="me-auto">
        <div>
          {item.name}{' '}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: '.65rem' }}>
              x {quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: '.75rem' }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        X
      </Button>
    </Stack>
  )
}
