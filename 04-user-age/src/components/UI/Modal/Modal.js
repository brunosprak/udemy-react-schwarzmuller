import React from 'react';

import styles from './Modal.module.css';
import Button from '../../UI/Button/Button';


const Modal = (props) => {

    return <div className={styles.modal}>
        <div className={styles.backdrop}>
            <div className={styles.title}>
                {props.title}
            </div>
            <div className={styles.content}>
                <Button type="button">Okay</Button>
            </div>
        </div>
    </div>;
}

export default Modal;