import styles from './pagePath.module.css';

const PagePath = ({ categoryName, matchedProducts }) => {
    return (
        <nav className={styles.categoryPath}>
            <ul className={styles.categoryPathList}>
                <li className={styles.categoryPathListItem}>
                    <a className={styles.categoryPathListItemLink} href={`"/"`}>{'Home'}</a>
                </li>
                <li className={styles.categoryPathListItem}>
                    <a className={styles.categoryPathListItemLink} href={`/category/${categoryName}`}>{categoryName}</a>
                </li>
            </ul>
        </nav>
    )
}

export default PagePath;