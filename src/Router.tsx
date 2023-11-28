import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Payment } from './pages/Payment'
import { DefaultLayout } from './layout/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
      </Route>
    </Routes>
  )
}
