import Login from "../components/login/Login";
import CartProvider from "../store/CartProvider";

const LoginPage = () => {
    return (
        <CartProvider>
            <Login />
        </CartProvider>
    )
}

export default LoginPage;
