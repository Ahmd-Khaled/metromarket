import { useRef, useState } from 'react';
import styles from './filterList.module.css';

const FilterList = ({ countBrands, onFilterCheckedBox, onClearSelected }) => {

    const selectedBrandRef = useRef();

    const [brandClicked, setBrandClicked] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);
    const [selectedCheckBoxs, setSelectedCheckBoxs] = useState([]);

    const brandClickHandler = () => {
        setBrandClicked(!brandClicked);
    };

    const Brands = Object.keys(countBrands);

    // let selectedCheckBoxs = [];

    const handleChange = (event) => {
        const isChecked = event.target.checked
        const checkboxValue = event.target.value;

        // console.log(`is -${checkboxValue}- Checked: ${isChecked}`);

        setSelectedCheckBoxs((prevState) => {
            if (isChecked) {
                if (prevState.includes(checkboxValue)) {
                    return [...prevState]
                } else {
                    return [...prevState, checkboxValue]
                }  
            } else {
                return [...prevState];
            }

        });
        console.log(selectedCheckBoxs);
    }

    const clearSelectedHandler = () => {
        // onClearSelected();
        // setSelectedCheckBoxs([]);
    };

    const submitFilterHandler = (event) => {
        event.preventDefault();
        onFilterCheckedBox(selectedCheckBoxs);
        console.log(selectedCheckBoxs);
    };



    return (
        <aside className={styles.categoryResultsFilter}>
            <h4 className={styles.categoryResultsFilterTtl}>Filter By</h4>
            <div className={styles.categFilter}>
                <div className={styles.categFilterHeader} onClick={brandClickHandler}>
                    <h5 className={styles.categFilterHeaderBrand}>Brand</h5>
                    <img
                        className={brandClicked
                            ? `${styles.categFilterHeaderImg} ${styles.rotated90}`
                            : styles.categFilterHeaderImg}
                        src={process.env.PUBLIC_URL + "/assets/imgs/arrow.svg"}
                        alt=">"
                    />
                </div>
                <form className={styles.categFilterForm} onSubmit={submitFilterHandler}>
                    {!brandClicked &&
                        <ul className={styles.categFilterFormList}>
                            {Brands.sort().map((key, index) => {
                                return (
                                    <li className={styles.categFilterFormListItem} key={index}>
                                        <input
                                            ref={selectedBrandRef}
                                            value={key}
                                            type="checkbox"
                                            id={key}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor={key}>
                                            {key}
                                            <span className={styles.categItemNum}> ({countBrands[key]})</span>
                                        </label>
                                    </li>
                                )
                            })}
                        </ul>
                    }
                    <div className={styles.categFilterFormBtns}>
                        <button className={styles.categFilterFormBtnCancel} type='reset' onClick={clearSelectedHandler}>Cancel</button>
                        <button className={styles.categFilterFormBtnFilter} type='submit'>Filter</button>
                    </div>
                </form>
            </div>
        </aside>
    )
}

export default FilterList;