import { Link } from 'react-router-dom';
import styles from './footerListItem.module.css';

const FooterListItem = ({ linkName, linkUrl }) => {
    return (
        <li className={styles.footerListItem}>
            <Link className={styles.footerListItemLink} to={`/${linkUrl}`}>{linkName}</Link>
        </li>
    )
}

export default FooterListItem;
