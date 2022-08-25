import Register from "../components/register/Register";
import CartProvider from "../store/CartProvider";

const RegisterPage = () => {
    return (
        <CartProvider>
            <Register />
        </CartProvider>
    )
}

export default RegisterPage;    
