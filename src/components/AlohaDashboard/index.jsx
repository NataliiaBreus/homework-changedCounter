import { Component } from 'react';
import SortedAlohaList from './SortedAlohaList';
import SignUpForm from '../SignUpForm';

class AlohaDashboard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [
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
      ],
    };
  }

  setUsers = users => {
    this.setState({
      users,
    });
  };

  registerUser = user => {
    const { users } = this.state;
    const newUsersArray = [...users];
    const lastId = newUsersArray.reduce(
      (acc, cur) => (cur.id > acc ? cur.id : acc),
      0
    );
    newUsersArray.push({ ...user, id: lastId + 1 });
    this.setUsers(newUsersArray);
  };

  render () {
    const { users } = this.state;
    return (
      <>
        <SortedAlohaList users={users} setUsers={this.setUsers} />
        <SignUpForm registerUser={this.registerUser} />
      </>
    );
  }
}

export default AlohaDashboard;

/*
  Реализовать функционал удаления приветствия с каким-то пользователем.
  Для удаления объекта пользователя из массива можно использовать filter.
*/
