import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useContext } from 'react';
import LanguageContext from './context.js';

const LazyLandingPage = lazy(() => import('./pages/landing-page'))
const LazyHomePage = lazy(() => import('./pages/home-page'))
const LazyServicesPage = lazy(() => import('./pages/services-page'))
const LazyAboutPage = lazy(() => import('./pages/about-page'))
const LazyPricingPage = lazy(() => import('./pages/pricing-page'))
const LazyPortfolioPage = lazy(() => import('./pages/portfolio-page'))
const LazyContactPage = lazy(() => import('./pages/contact-page'))
const LazyErrorPage = lazy(() => import('./pages/error-page'))


const LazyNavigation = () => {
    const context = useContext(LanguageContext)
    console.log("LanguageContext:   ", context)
    // const loggedIn = context.user && context.user.loggedIn
    return (
        <BrowserRouter>
            <Suspense fallback={<h1>Loading</h1>}>
                <Routes>
                    <Route path="/" element={<LazyLandingPage />} />
                    <Route path="/home" element={<LazyHomePage />} />
                    <Route path="/services" element={<LazyServicesPage />} />
                    <Route path="/about" element={<LazyAboutPage />} />
                    <Route path="/pricing" element={<LazyPricingPage />} />
                    <Route path="/portfolio" element={<LazyPortfolioPage />} />
                    <Route path="/contact" element={<LazyContactPage />} />
                    <Route path="*" element={<LazyErrorPage />} />

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