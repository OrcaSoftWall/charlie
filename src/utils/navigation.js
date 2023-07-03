    const links = [
        { contentID: 'home', link: '/home' },
        { contentID: 'services', link: '/services' },
        { contentID: 'pricing', link: '/pricing' },
        { contentID: 'about', link: '/about' },
        { contentID: 'portfolio', link: '/portfolio' },
        { contentID: `contact`, link: '/contact' },
    ];


export default links


// const getNavigation = (user) => {
//     const authLinks = [
//         {
//             title: "Publications",
//             link: "/"
//         },
//         {
//             title: "Share your thoughts",
//             link: "/share"
//         },
//         {
//             title: "Profile",
//             link: `/profile/${user && user.id}`
//         }
//     ]
//     const guestLinks = [
//         {
//             title: "Publications",
//             link: "/"
//         },
//         {
//             title: "Register",
//             link: "/register"
//         },
//         {
//             title: "Login",
//             link: "/login"
//         }
//     ]
//     const loggedIn = user && user.loggedIn
//     return loggedIn ? authLinks : guestLinks

// }

// export default getNavigation