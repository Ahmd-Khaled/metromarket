import cities from './cities';
import styles from './locator.module.css';

const Locator = () => {
    return (
        <section className={styles.locator}>
            <div className='sectionContainer'>
                <div className={styles.locatorTitle}>
                    <h2 className={styles.locatorTtl}>Store Locator</h2>
                    <h4 className={styles.locatordesc}>Find our branches easily</h4>
                </div>
                <form className={styles.locatorForm}>
                    <div className={styles.locatorFormSelect}>
                        <select className={styles.locatorFormSelectCity} placeholder='City'>
                            {cities.map((obj, index) => {
                                return (
                                    <option value={obj.name} key={obj.name}>{obj.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className={styles.locatorFormSelect}>
                        <select className={styles.locatorFormSelectStreet} placeholder='Street'>
                            <option value="" key="">No Street</option>
                        </select>
                    </div>
                    <button className={styles.locatorFormBtn}>
                        <span>Search</span>
                        <img src="./assets/imgs/search.png" alt="sIcon" />
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Locator;