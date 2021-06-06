import './App.css';
import React, { useState } from 'react';
import SelectedUserList from './components/SelectedUserList';
import UserList from './components/UserList';
import AlohaDashboard from './components/AlohaDashboard';
import Counter from './components/Counter';
import Button from './components/Button';

const usersDB = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Smith',
  },
  {
    id: 2,
    firstname: 'Bob',
    lastname: 'Brown',
  },
  {
    id: 3,
    firstname: 'Sara',
    lastname: 'Smith',
  },
  {
    id: 4,
    firstname: 'Mary',
    lastname: 'Black',
  },
];

/*
  Перепишите Aloha, App как функциональные компоненты
*/

function App (props) {
  const defaultUsers = usersDB.map(user => ({
    ...user,
    isSelected: false,
  }));
  const [users, setUsers] = useState(defaultUsers);
  const [isHidden, setIsHidden] = useState(false);
  const hideHandler = () => setIsHidden(!isHidden);

  return (
    <>
      <header>
        <SelectedUserList users={users} />
      </header>
      <main>
        <Button />
        <AlohaDashboard />
        <button onClick={hideHandler}>Hide</button>
        <UserList users={users} setUsers={setUsers} />
        <Counter />
       
      </main>
    </>
  );
}
export default App;
