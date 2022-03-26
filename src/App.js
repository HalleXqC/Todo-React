import { Navigate, Route, Routes } from 'react-router-dom'
import * as AuthPages from './apps/Auth/pages'
import * as TodoPages from './apps/Todo/pages'
import PrivateRoutes from './components/PrivateRoute'

const App = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<TodoPages.List />} />
        <Route path="/create" element={<TodoPages.Create />} />
        <Route path="/todo/:id" element={<TodoPages.Page />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      <Route path='/auth/login' element={<AuthPages.Login />} />
      <Route path='/auth/register' element={<AuthPages.Register />} />
    </Routes>
  )
}

export default App