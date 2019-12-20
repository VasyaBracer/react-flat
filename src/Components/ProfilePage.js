import React from 'react';
import { connect } from 'react-redux';
import AddUser from '../js/AddUser';

const ClearUsers = connect(
  null,
  (dispatch) => ({
    clearUsers: () => {
      dispatch({
        type: 'clearUsers',
        payload: {},
      });
    },
  })
)((props) => (
  <button className="clear-users-btn" onClick={() => props.clearUsers()}>Clear List</button>
));

const ShowUserList = connect(
  (state) => ({ users: state.users }), // mapStateToProps
  (dispatch) => ({
    removeUser: (nickname) => {
      dispatch({
        type: 'removeUser',
        payload: { nickname },
      });
    },
  })
)((props) => (
  <ul className="user-list">
    {props.users.map((user) =>
      (<li className="users-list-desc" key={Math.random()}>
          <div className='user-container'>
          <h3>{user.nickname}</h3>
      
          <div className='user-description'>{user.description}</div>
          <button className="remove-user-btn" onClick={() => props.removeUser(user.nickname)}>Remove</button>
        </div>
      </li>)
    )}
  </ul>)
);

export default class ProfilePage extends React.Component {
  render() {
    return (
      <div className='profile-container'>
        <h2 className='profile-page-name'>Profile page</h2>
        <AddUser />
        <ShowUserList />
        <ClearUsers />
      </div>
    );
  }
}