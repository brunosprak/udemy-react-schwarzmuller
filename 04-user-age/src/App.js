import React, { useState } from 'react';

import AddUser from './components/user/AddUser/AddUser';
import ListUser from './components/user/ListUser/ListUser';
import Card from './components/UI/Card/Card';
import User from './models/User';
import './App.css';
import Modal from './components/UI/Modal/Modal';

function App() {

  const USERS = [
    new User('João', 31),
    new User('Maria', 22)
  ];
  
  const [users, setUsers] = useState(USERS);

  const submitHandler = (user) => {
    setUsers( (prevUsers) => (
      [user, ...prevUsers]
    ) );
  }

  return (
    <div className="App">
      <Card>
        <AddUser onSubmit={submitHandler}/>
      </Card>
      <Card>
        <ListUser users={users}/>
      </Card>
      {/* <Modal title="Invalid input"></Modal> */}
    </div>
  );
}

export default App;
