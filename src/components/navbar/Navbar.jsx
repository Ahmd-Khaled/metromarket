import { useState } from 'react';
import { Link } from 'react-router-dom';
import DropDown from '../dropDown/DropDown';
import styles from './navbar.module.css';

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);

    const linkClickHandler = (event) => {
        event.preventDefault();
        setIsClicked(!isClicked)
    }
    return (
        <section className={styles.navbar}>
            <div className='sectionContainer'>
                <div className={styles.navbarContainer}>
                    <ul className={styles.navbarLinks}>
                        <li className={styles.navbarLinksItem}>
                            <a className={styles.navbarLink} href="/" onClick={linkClickHandler}>Shop</a>
                            {isClicked && <DropDown />}
                        </li>
                        <li className={styles.navbarLinksItem}>
                            <Link className={styles.navbarLink} to="/recipes">Recipes</Link>
                        </li>
                        <li className={styles.navbarLinksItem}>
                            <a className={styles.navbarLink} href="/FAQs">FAQs</a>
                        </li>
                        <li className={styles.navbarLinksItem}>
                            <Link className={styles.navbarLink} to="/about">About</Link>
                        </li>
                        <li className={styles.navbarLinksItem}>
                            <a className={styles.navbarLink} href="/Magazine">Magazine</a>
                        </li>
                        <li className={styles.navbarLinksItem}>
                            <a className={styles.navbarLink} href="/VirtualStore">Virtual Store</a>
                        </li>
                        <li className={styles.navbarLinksItem}>
                            <a className={styles.navbarLink} href="/Corporate">Corporate</a>
                        </li>
                        <li className={styles.navbarLinksItem}>
                            <a className={styles.navbarLink} href="/Donations">Donations</a>
                        </li>
                    </ul>
                    <button className={styles.navbarBtn}>
                        <a className={styles.navbarBtnLink} href="/Promotions">Promotions</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Navbar