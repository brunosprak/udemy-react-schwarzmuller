import React, { useState } from 'react';
import User from '../../../models/User';

import Button from '../../UI/Button/Button';
import styles from './AddUser.module.css';


const AddUser = (props) => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');


    const submitHandler = (event) => {
        event.preventDefault();

        props.onSubmit(new User(username, age));
    }

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    return <form onSubmit={submitHandler}>
        <div className={styles['form-controls']}>
            <label>Username</label>
            <input type='text' value={username} onChange={usernameChangeHandler} ></input>
        </div>
        <div className={styles['form-controls']}>
            <label>Age (Years)</label>
            <input type='text' value={age} onChange={ageChangeHandler}></input>
        </div>
        <div className={styles['form-actions']}>
             <Button type="submit">Add User</Button>
        </div>
    </form>;
}

export default AddUser;