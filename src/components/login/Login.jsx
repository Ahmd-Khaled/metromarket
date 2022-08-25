import { Link } from 'react-router-dom';
import Input from '../input/Input';
import styles from './login.module.css';

const Login = () => {
    return (
        <section className={styles.login}>
            <div className={styles.loginContainer}>
                <div className={styles.loginImage}>
                    <a href="/">
                        <img
                            className={styles.loginLogo}
                            src={process.env.PUBLIC_URL + `/assets/imgs/Logo.svg`}
                            alt="LogoImage"
                        />
                    </a>
                    <h4 className={styles.loginTitle}>{"Login to your account"}</h4>
                </div>
                <form className={styles.loginForm}>
                    <Input
                        inputType={"text"}
                        placeholder={'Enter Your E-Mail or Phone number'}
                        id="passwordInput"
                        ifRequired={true}
                        labelTitle={"Email Or Phone"}
                    />
                    <Input
                        inputType={"password"}
                        placeholder={'Email Or Phone'}
                        id="emailInput"
                        ifRequired={true}
                        labelTitle={"Password"}
                    />
                    <button className={styles.loginBtn} type='submit'>Login</button>
                    <a href='/' className={styles.loginFaceBtn}>
                        <img className={styles.loginFaceBtnLogo} src={process.env.PUBLIC_URL + `/assets/imgs/facebook.svg`} alt="facebook" />
                        <span className={styles.loginFaceBtnTxt}>Login with facebook</span>
                    </a>
                    <div className={styles.loginLinks}>
                        <a className={styles.loginForgetLink} href="/">Forget Password ?</a>
                        <div  className={styles.loginRegisterLink}>
                            <span>Do not have an account ?</span>
                            <Link to="/register">Register</Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login;
