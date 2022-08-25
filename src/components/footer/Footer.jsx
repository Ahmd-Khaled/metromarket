import FooterListItem from '../footerListItem/FooterListItem';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className='sectionContainer'>
                <div className={styles.footerContainer}>
                    <div className={styles.footerMainLinks}>
                        <div className={styles.footerLinks}>
                            <h4 className={styles.footerLinksTitle}>Quick Links</h4>
                            <ul className={styles.footerList}>
                                <FooterListItem linkName={"FAQs"} linkUrl={"FAQs"} />
                                <FooterListItem linkName={"Recipes"} linkUrl={"recipes"} />
                                <FooterListItem linkName={"Contact us"} linkUrl={"Contact-us"} />
                            </ul>
                        </div>
                        <div className={styles.footerLinks}>
                            <h4 className={styles.footerLinksTitle}>About</h4>
                            <ul className={styles.footerList}>
                                <FooterListItem linkName={"About Metro Market"} linkUrl={"about"} />
                                <FooterListItem linkName={"Our Branches"} linkUrl={"Our-Branches"} />
                                <FooterListItem linkName={"Virtual Store"} linkUrl={"Virtual-Store"} />
                            </ul>
                            <div className={styles.footerSocial}>
                                <h4 className={styles.footerLinksTitle}>Follow Us</h4>
                                <ul className={styles.footerSocialList}>
                                    <li className={styles.footerSocialItem}>
                                        <a className={styles.footerSocialItemLink} href="/">
                                            <img src={process.env.PUBLIC_URL + "/assets/imgs/instagram.png"} alt="instagram" />
                                        </a>
                                    </li>
                                    <li className={styles.footerSocialItem}>
                                        <a className={styles.footerSocialItemLink} href="/">
                                            <img src={process.env.PUBLIC_URL + "/assets/imgs/facebook-logo.png"} alt="facebook" />
                                        </a>
                                    </li>
                                    <li className={styles.footerSocialItem}>
                                        <a className={styles.footerSocialItemLink} href="/">
                                            <img src={process.env.PUBLIC_URL + "/assets/imgs/youtube.png"} alt="youtube" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.footerLinks}>
                            <h4 className={styles.footerLinksTitle}>Help & Support</h4>
                            <ul className={styles.footerList}>
                                <FooterListItem linkName={"Terms & Conditions"} linkUrl={"terms"} />
                                <FooterListItem linkName={"Account Deletion"} linkUrl={"Account-Deletion"} />
                                <FooterListItem linkName={"Privacy Policies"} linkUrl={"Privacy-Policies"} />
                            </ul>
                            <div className={styles.footerHotline}>
                                <h4 className={styles.footerLinksTitle}>Hotline</h4>
                                <span className={styles.footerHotlineNum}>19619</span>
                            </div>
                        </div>
                        <div className={styles.footerLinks}>
                            <h4 className={styles.footerLinksTitle}>Download Our App</h4>
                            <ul className={styles.footerDownloadList}>
                                <li className={styles.footerDownloadItem}>
                                    <a className={styles.footerDownloadItemLink} href="/">
                                        <img src={process.env.PUBLIC_URL + "/assets/imgs/app-store-apple.svg"} alt="app-store" />
                                    </a>
                                </li>
                                <li className={styles.footerDownloadItem}>
                                    <a className={styles.footerDownloadItemLink} href="/">
                                        <img src={process.env.PUBLIC_URL + "/assets/imgs/google-play-badge.png"} alt="google-play" />
                                    </a>
                                </li>
                                <li className={styles.footerDownloadItem}>
                                    <a className={styles.footerDownloadItemLink} href="/">
                                        <img src={process.env.PUBLIC_URL + "/assets/imgs/Badge-Black.png"} alt="Badge-Black" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.footerLogo}>
                        <a className={styles.footerLogoLink} href="/">
                            <img className={styles.footerLogoLinkImg} src={process.env.PUBLIC_URL + "/assets/imgs/Logo.svg"} alt="Logo" />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.footerCopyRight}>
                <div className='sectionContainer'>
                    <ul className={styles.footerCopyRightList}>
                        <li className={styles.footerCopyRightListItem}>&copy; 2022 All rights reserved to Metro Markets</li>
                        <li className={styles.footerCopyRightListItem}>Tax Registration Number: 611-682-095</li>
                        <li className={styles.footerCopyRightListItem}>Terms & Conditions</li>
                        <li className={styles.footerCopyRightListItem}>
                            <img src={process.env.PUBLIC_URL + "/assets/imgs/Mastercard.png"} alt="mastercard" />
                            <img src={process.env.PUBLIC_URL + "/assets/imgs/visa.png"} alt="visa" />
                            <img src={process.env.PUBLIC_URL + "/assets/imgs/cash.png"} alt="cash" />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer