import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Admin from "../../pages/Admin/Admin"
import Auth from "../../pages/Auth/Auth"
import Home from "../../pages/Home/home"
import News from "../../pages/News/News"
import NewsPage from "../../pages/News/NewsPage"
import {
  ADMIN_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  NEWS_CREATE_ROUTE,
  NEWS_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/const"


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Home />}>
//       <Route path="/news" element={<News />} />
//       <Route path="/login" element={<Auth />} />
//       <Route path="/registration" element={<Auth />} />
//       <Route path="/admin" element={<Admin />} />
//     </Route>
//   )
// );

// // Instead of this:
// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     children: [
//       {
//         path: "/news",
//         element: <News />,
//       },
//       {
//         path: "/login",
//         element: <Auth />,
//       },
//       {
//         path: "/registration",
//         element: <Auth />,
//       },
//     ],
//   },
// ]);

// export const authRoutes = [
//   {
//     path: ADMIN_ROUTE,
//     Component: Admin,
//   },
//   {
//     path: NEWS_CREATE_ROUTE,
//     Component: NewsPage,
//   },
// ]

// export const publicRoutes = [
//   {
//     path: HOME_ROUTE,
//     Component: Home,
//   },
//   {
//     path: NEWS_ROUTE,
//     Component: News,
//   },
//   {
//     path: LOGIN_ROUTE,
//     Component: Auth,
//   },
//   {
//     path: REGISTRATION_ROUTE,
//     Component: Auth,
//   },
//   {
//     path: NEWS_ROUTE + "/:id",
//     Component: NewsPage,
//   },
// ]
