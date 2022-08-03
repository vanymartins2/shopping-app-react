import { Container } from 'react-bootstrap'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { Footer } from './components/Footer'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <AnimatedRoutes />
        </Container>
        <Footer />
      </ShoppingCartProvider>
    </>
  )
}

export default App
