import styles from './input.module.css';

const Input = ({inputType, placeholder, id, ifRequired, labelTitle}) => {
    return (
        <div className={styles.loginInput}>
            <input type={inputType} id={id} placeholder={placeholder} required={ifRequired} />
            <label htmlFor={id}>
                {labelTitle}{ifRequired &&<sup>*</sup>}
            </label>
        </div>
    )
}

export default Input;
