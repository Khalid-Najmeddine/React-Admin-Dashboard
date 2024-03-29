import Home from "./pages/Home/Home"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Users from "./pages/Users/Users";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Login from "./pages/Login/Login";
import "./styles/Global.scss";
import SingleUser from "./pages/SingleUser/SingleUser";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menu-Container">
            <Menu/>
          </div>
          <div className="content-Container">
            <QueryClientProvider client={queryClient}>
              <Outlet/>
            </QueryClientProvider>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {path: "/", element: <Home/>},
        {path: "/users", element: <Users/>},
        {path: "/products", element: <Products/>},
        {path: "/users/:id", element: <SingleUser/>},
        {path: "/products/:id", element: <SingleProduct/>}
      ]
    },
    {path:"/login", element: <Login/>}
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
