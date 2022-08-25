import { Link } from 'react-router-dom';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import HeaderCartBtn from '../headerCartBtn/HeaderCartBtn';
import SideNavBar from '../sideNavBar/SideNavBar';
import styles from './header.module.css';

const Header = () => {
    const [showSideNavBar, SetShowSideNavBar] = useState(false);

    const sideNavBarHandler = () => {
        SetShowSideNavBar(!showSideNavBar);
    };

    return (
        <section className={styles.header}>
            <div className='sectionContainer'>
                <div className={styles.headerContainer}>
                    <div className={styles.headerLogo}>
                        <button className={styles.headerMinuBar} onClick={sideNavBarHandler}>
                            <FontAwesomeIcon className={styles.headerMinuBarIcon} icon={faBars} />
                        </button>
                        {showSideNavBar && <SideNavBar />}
                        <Link to="/">
                            <img className={styles.headerLogoImg} src={process.env.PUBLIC_URL + "/assets/imgs/Logo.svg"} alt="Logo" />
                        </Link>
                    </div>
                    <form className={styles.headerForm}>
                        <input className={styles.headerFormInput} type="text" placeholder='What are you looking for ?' />
                        <button className={styles.headerFormSearch} type='submit'>
                            <img className={styles.headerFormSearchIcon} src={process.env.PUBLIC_URL + "/assets/imgs/search-icon.svg"} alt="search" />
                        </button>
                    </form>
                    <div className={styles.headerLinks}>
                        <div className={styles.headerLinksContainer}>
                            <Link to='/login' className={styles.headerLogin}>
                                <img className={styles.headerLoginIcon} src={process.env.PUBLIC_URL + "/assets/imgs/account.svg"} alt="login" />
                                <span className={styles.headerLoginTxt}>Login - Sign Up</span>
                            </Link>
                            <HeaderCartBtn />
                            <div className={styles.headerLocation}>
                                <img className={styles.headerLocationIcon} src={process.env.PUBLIC_URL + "/assets/imgs/location.svg"} alt="" />
                                <span className={styles.headerLocationCity}>Cairo</span>
                                <a className={styles.headerLocationTxt} href="/">Change Branch</a>
                            </div>
                        </div>
                        <div className={styles.headerLang}>
                            <a className={styles.headerLangName} href="/">AR</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;