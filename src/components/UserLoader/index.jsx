import React, { Component } from 'react';
import Spinner from '../Spinner';

export default class UserLoader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
      error: null,
    };
  }

  componentDidMount () {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data.results,
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isFetching: false }));
  }

  render () {
    const {users, isFetching, error} = this.state;

    if(isFetching) return <Spinner />
    if(error) return <div>ERROR!</div>

    return (
    <div>
      <h1>USER LIST</h1>
      <ul>
        {users.map(user => (
          <li key={user.login.uuid}>{JSON.stringify(user)}</li>
        ))}
      </ul>
    </div>
    );
  }
}