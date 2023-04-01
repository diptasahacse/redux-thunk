import "./App.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Layouts from "./Layouts/Layouts";
import TopRated from "./pages/TopRated";
import { Provider } from "react-redux";
import store from "./redux/store";
import Dashboard from "./pages/Dashboard";
import ProductList from "./pages/dashboard/ProductList";
import Profile from "./pages/dashboard/Profile";
import DashboardPageNotFound from "./pages/dashboard/DashboardPageNotFound";
import AddProducts from "./pages/dashboard/AddProducts";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main>
          <Layouts>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/top-rated" element={<TopRated />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<Profile />} />
                <Route path="product-list" element={<ProductList />} />
                <Route path="add-products" element={<AddProducts />} />
                <Route path="*" element={<DashboardPageNotFound />} />
              </Route>
            </Routes>
          </Layouts>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
