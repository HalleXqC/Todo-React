import { Route, Routes } from 'react-router-dom'
import * as AuthPages from './apps/Auth/pages'

const App = () => {
  return (
    <Routes>
      <Route path='/auth/login' element={<AuthPages.Login />} />
      <Route path='/auth/register' element={<AuthPages.Register />} />
    </Routes>
  )
}

export default App