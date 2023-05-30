import { Main } from './containers/main'
import { Login } from './containers/login'
import { Layout } from './containers/layout'
import { Seller } from './containers/seller'
import { Catalog } from './containers/catalog'
import { Register } from './containers/register'
import { ForgotPassword } from './containers/forgotPassword'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SingleAnnouncement } from './components/singleAnnouncement'

export const MyRouter = () => {
    if (window.location.pathname === '/login' || window.location.pathname === '/register' || window.location.pathname === '/forgotPassword') {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/forgotPassword' element={<ForgotPassword />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </BrowserRouter>
        )
    } else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path='/' element={<Main />} />
                        <Route path='/item/:id' element={<SingleAnnouncement />} />
                        <Route path='/seller/:id' element={<Seller />} />
                        <Route path='/catalog/:id' element={<Catalog />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}