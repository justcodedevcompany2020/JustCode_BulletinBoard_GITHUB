import { Main } from './containers/main'
import { Login } from './containers/login'
import { Layout } from './containers/layout'
import { Seller } from './containers/seller'
import { Wallet } from './containers/wallet'
import { Catalog } from './containers/catalog'
import { Reviews } from './containers/reviews'
import { Register } from './containers/register'
import { Messages } from './containers/messages'
import { Settings } from './containers/settings'
import { Favorites } from './containers/favorites'
import { Notifications } from './containers/notifications'
import { ProfileLayout } from './containers/profileLayout'
import { ForgotPassword } from './containers/forgotPassword'
import { MyAnnouncements } from './containers/myAnnouncements'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SingleAnnouncement } from './components/singleAnnouncement'
import { CreateAnnouncement } from './containers/createAnnouncement'

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
                        {/* <Route path='*' element={<404 />} /> */}
                        <Route path='/item/:id' element={<SingleAnnouncement />} />
                        <Route path='/seller/:id' element={<Seller />} />
                        <Route path='/catalog/:id' element={<Catalog />} />
                        <Route path='/profile' element={<ProfileLayout />} >
                            <Route path='/profile/profile' element={<MyAnnouncements />} />
                            <Route path='/profile/reviews' element={<Reviews />} />
                            <Route path='/profile/notifications' element={<Notifications />} />
                            <Route path='/profile/favorites' element={<Favorites />} />
                            <Route path='/profile/wallet' element={<Wallet />} />
                            <Route path='/profile/settings' element={<Settings />} />
                            <Route path='/profile/messages' element={<Messages />} />
                        </Route>
                        <Route path='/create' element={<CreateAnnouncement />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}