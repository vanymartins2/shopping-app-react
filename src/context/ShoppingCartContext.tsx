import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { ShoppingCart } from '../components/ShoppingCart'
import { useLocalStorage } from '../hooks/useLocalStorage'

type ShoppingCartProviderProps = {
  children: ReactNode
}

type ShoppingCartContext = {
  getItemQuantity: (id: string) => number
  increaseItemQuantity: (id: string) => void
  decreaseItemQuantity: (id: string) => void
  removeFromCart: (id: string) => void
  openCart: () => void
  closeCart: () => void
  cartQuantity: number
  cartItems: CartItem[]
  storeItems: StoreItem[]
}

type CartItem = {
  id: string
  quantity: number
}

type StoreItem = {
  id: string
  name: string
  price: number
  imgUrl: string
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const API_URL = 'http://localhost:3000/product'
  const [isOpen, setIsOpen] = useState(false)

  const [storeItems, setStoreItems] = useState<StoreItem[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(API_URL)
      const data = await response.json()
      setStoreItems(data)
    }
    getProducts()
  }, [])

  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shopping-cart',
    []
  )

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const openCart = () => setIsOpen(true)

  const closeCart = () => setIsOpen(false)

  function getItemQuantity(id: string) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseItemQuantity(id: string) {
    setCartItems(currentItems => {
      if (currentItems.find(item => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }]
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseItemQuantity(id: string) {
    setCartItems(currentItems => {
      if (currentItems.find(item => item.id === id)?.quantity === 1) {
        return currentItems.filter(item => item.id !== id)
      } else {
        return currentItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id: string) {
    setCartItems(currentItems => {
      return currentItems.filter(item => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
        cartItems,
        storeItems,
        cartQuantity,
        openCart,
        closeCart
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}
