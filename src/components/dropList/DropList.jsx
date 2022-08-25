import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './dropList.module.css';

const DropList = ({ categList }) => {
    const [isHovered, setIsHovered] = useState(false);

    const plusHandler = (event) => {
        setIsHovered(!isHovered);
        
        const listItem = categList.filter((ele) => ele.id === event.target.getAttribute('data-id'));
        console.log(listItem[0].parentList.map((ele) => {return ele.parentListName}));
    };

    return (
        <ul className={styles.dropDownList}>
            {categList.map((obj, index) => {
                return (
                    <li
                        className={styles.dropDownListItem}
                        key={obj.id}
                        onClick={plusHandler}
                        data-id={obj.id}
                    >
                        <Link to="/" className={styles.dropDownListItemLink}>{obj.grandListName}</Link>
                        <button className={styles.dropDownListItemBtn}>
                            <span
                                className={isHovered ? styles.rotatePlus : styles.vertical}>
                            </span>
                            <span className={styles.horizontal}></span>
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default DropList;
