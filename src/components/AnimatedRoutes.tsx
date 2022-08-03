import { Route, Routes, useLocation } from 'react-router-dom'
import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'
import { Store } from '../pages/Store'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
