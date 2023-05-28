import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useContext } from 'react';
import LanguageContext from './context.js';

const LazyLandingPage = lazy(() => import('./pages/landing-page'))
// const LazyShareThoughtsPage = lazy(() => import('./pages/share-thoughts'))
// const LazyRegisterPage = lazy(() => import('./pages/register'))
// const LazyLoginPage = lazy(() => import('./pages/login'))
// const LazyProfilePage = lazy(() => import('./pages/profile'))
// const LazyEditProfilePage = lazy(() => import('./pages/edit-user'))
// const LazyErrorPage = lazy(() => import('./pages/error'))

const LazyNavigation = () => {
    const context = useContext(LanguageContext)
    console.log("LanguageContext:   ", context)
    // const loggedIn = context.user && context.user.loggedIn
    return (
        <BrowserRouter>
            <Suspense fallback={<h1>Loading</h1>}>
                <Routes>
                    <Route path="/" element={<LazyLandingPage />} />
                    {/* <Route path="/share" element={loggedIn ? (<LazyShareThoughtsPage />) : (<Navigate replace to="/login" />)} />
                    <Route path="/register" element={!loggedIn ? (<LazyRegisterPage />) : (<Navigate replace to="/" />)} />
                    <Route path="/login" element={!loggedIn ? (<LazyLoginPage />) : (<Navigate replace to="/" />)} />
                    <Route path="/profile/:userid" element={loggedIn ? (<LazyProfilePage />) : (<Navigate replace to="/login" />)} />
                    <Route path="/edit-user/:userid" element={loggedIn ? (<LazyEditProfilePage />) : (<Navigate replace to="/login" />)} />
                    <Route path="*" element={<LazyErrorPage />} /> */}
                </Routes>
            </Suspense>
        </BrowserRouter >
    )
}

export default LazyNavigation


// const Navigation = () => {
//     return (
//         <BrowserRouter>
//             <Routes>  // to be able to load only one route
//                 <Route path="/" element={<Publications />} />
//                 <Route path="/share" element={<ShareThoughtsPage />} />
//                 <Route path="/register" element={<RegisterPage />} />
//                 <Route path="/login" element={<LoginPage />} />
//                 <Route path="/profile/:userid" element={<ProfilePage />} />
//                 <Route path="*" element={<ErrorPage />} />
//             </Routes>
//         </BrowserRouter>
//     )
// }

// export default Navigation