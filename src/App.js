import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import RecipePage from './pages/RecipePage';
import RecipesPage from './pages/RecipesPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/Product/:productName/:productId' element={<ProductPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/category/:categName' element={<CategoryPage />} />
      <Route path='/recipes' element={<RecipesPage />} />
      <Route path='/recipes/:recipeName' element={<RecipePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
