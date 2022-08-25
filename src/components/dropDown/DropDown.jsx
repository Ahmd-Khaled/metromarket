import { useState } from 'react';
import { Link } from 'react-router-dom';
import DropList from '../dropList/DropList';
import styles from './dropDown.module.css';
import dropDownData from './dropDownData';

const DropDown = () => {
    // const [isHovered, setIsHovered] = useState(false);

    // const dropDownDataKeys = Object.values(dropDownData)


    // dropDownData.map((obj, index) => {
    //     console.log(obj.parentList.map((ele) => {return ele.childList[0]}))
    // })

    // const plusHandler = (event) => {
    //     setIsHovered(!isHovered);
    //     // console.log(event.target.getAttribute('data-id'));
    //     // console.log(dropList[0].id);
    //     const clickedList = event.target.getAttribute('data-id');
    //     console.log(clickedList);
    //     const listItem = dropDownData.filter((ele) => ele.id === event.target.getAttribute('data-id'));
    //     console.log(listItem[0].parentList.map((ele) => {return ele.parentListName}));
    // };

    return (
        <div className={styles.dropDown}>
            <div className={styles.dropDownWrapper}>
                <DropList categList={dropDownData} />
            </div>
    </div>
    )
}

export default DropDown;