import { faSquareXmark, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useEffect, useState } from 'react';
import styles from './sideNavBar.module.css';

const SideNavBar = () => {
    const [showSideNavBar, setShowSideNavBar] = useState(true);

    // useEffect(() => {
        
    // },[])
    const closeBtnHandler = () => {
        setShowSideNavBar(!showSideNavBar);
    };

    return (
        <Fragment>
            {showSideNavBar && 
                <section className={styles.sideNavBar}>
                    <div className={styles.sideNavBarContainer}>
                        <div className={styles.sideNavBarMenu}>
                            <h3 className={styles.sideNavBarMenuTitle}>Menu</h3>
                            <ul className={styles.sideNavBarMenuList}>
                                <li className={styles.sideNavBarMenuListItem}>
                                    <a className={styles.sideNavBarMenuListItemLink} href="/HomeCurrent">Home</a>
                                </li>
                                <li className={styles.sideNavBarMenuListItem}>
                                    <a className={styles.sideNavBarMenuListItemLink} href="/">Shop</a>
                                </li>
                                <li className={styles.sideNavBarMenuListItem}>
                                    <a className={styles.sideNavBarMenuListItemLink} href="/">Recipes</a>
                                </li>
                                <li className={styles.sideNavBarMenuListItem}>
                                    <a className={styles.sideNavBarMenuListItemLink} href="/">FAQs</a>
                                </li>
                                <li className={styles.sideNavBarMenuListItem}>
                                    <a className={styles.sideNavBarMenuListItemLink} href="/">About</a>
                                </li>
                                <li className={styles.sideNavBarMenuListItem}>
                                    <a className={styles.sideNavBarMenuListItemLink} href="/">Magazine</a>
                                </li>
                                <li className={styles.sideNavBarMenuListItem}>
                                    <a className={styles.sideNavBarMenuListItemLink} href="/">Virtual Store</a>
                                </li>
                                <li className={styles.sideNavBarMenuListItem}>
                                    <a className={styles.sideNavBarMenuListItemLink} href="/">Corporate</a>
                                </li>
                                <li className={styles.sideNavBarMenuListItem}>
                                    <a className={styles.sideNavBarMenuListItemLink} href="/">Donations</a>
                                </li>
                                <li className={styles.sideNavBarMenuListItem}>
                                    <a className={styles.sideNavBarMenuListItemLink} href="/">Promotions</a>
                                </li>
                                <li className={styles.sideNavBarMenuListItem}>
                                    <a className={styles.sideNavBarMenuListItemLink} href="/">عربي</a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.sideNavBarClose}>
                            <button className={styles.sideNavBarCloseBtn} onClick={closeBtnHandler}>
                                <FontAwesomeIcon  className={styles.sideNavBarCloseBtnIcon} icon={faXmark} />
                            </button>
                        </div>
                    </div>
                </section>
            }
        </Fragment>
    )
}

export default SideNavBar;