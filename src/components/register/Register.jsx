import { Link } from 'react-router-dom';
import Input from '../input/Input';
import styles from './register.module.css';

const Register = () => {
    return (
        <section className={styles.login}>
            <div className={styles.loginContainer}>
                <div className={styles.loginImage}>
                    <Link to="/">
                        <img
                            className={styles.loginLogo}
                            src={process.env.PUBLIC_URL + `/assets/imgs/Logo.svg`}
                            alt="LogoImage"
                        />
                    </Link>
                    <h4 className={styles.loginTitle}>{"Login to your account"}</h4>
                </div>
                <form className={styles.loginForm}>
                    <Input
                        inputType={"text"}
                        placeholder={'Enter Your First Name'}
                        id="fNameInput"
                        ifRequired={true}
                        labelTitle={"First Name"}
                    />
                    <Input
                        inputType={"text"}
                        placeholder={'Enter Your Last Name'}
                        id="lNameInput"
                        ifRequired={true}
                        labelTitle={"Last Name"}
                    />
                    <Input
                        inputType={"text"}
                        placeholder={'Enter Your Phone Number'}
                        id="phoneNumInput"
                        ifRequired={true}
                        labelTitle={"Phone Number"}
                    />
                    <Input
                        inputType={"email"}
                        placeholder={'Enter Your E-mail'}
                        id="emailInput"
                        ifRequired={true}
                        labelTitle={"E-mail"}
                    />
                    <Input
                        inputType={"password"}
                        placeholder={'Enter Your Password'}
                        id="passwordInput"
                        ifRequired={true}
                        labelTitle={"Password"}
                    />
                    <Input
                        inputType={"password"}
                        placeholder={'Confirm Your Password'}
                        id="confPasswordInput"
                        ifRequired={true}
                        labelTitle={"Confirm Your Password"}
                    />
                    <button className={styles.loginBtn} type='submit'>Register</button>
                    <div className={styles.loginLinks}>
                        <div className={styles.loginLink}>
                            <span>By register, you agree to our</span>
                            <a className={styles.loginForgetLink} href="/">Terms & Conditions</a>
                        </div>
                        <div  className={styles.loginLink}>
                            <span>Already have an account ?</span>
                            <Link to="/login">Login</Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Register
