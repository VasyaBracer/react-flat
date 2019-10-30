import React from 'react';
import {connect} from 'react-redux';

const AddUser = connect(
    null,
    (dispatch) => ({
      addUser: () => {
        dispatch({
          type: 'addUser',
          payload: {
            nickname: 'new',
            password: 'password',
            description: 'new-user',
          },
        });
      },
    })
  )((props) => (
    <button onClick={() => props.addUser()}>add usr</button>
  ));
  
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
    <button onClick={() => props.clearUsers()}>clear</button>
  ));
  
  const ShowUserList = connect(
    (state) => ({ users: state.users }), // mapStateToProps
    (dispatch) => ({
      removeUser: (nickname) => {
        dispatch({
          type: 'removeUser',
          payload: {nickname},
        });
      },
    })
  )((props) => (
    <ul>
      {props.users.map((user) =>
        (<li key={Math.random()}>{user.nickname}<button onClick={() => props.removeUser(user.nickname)}>remove</button></li>)
      )}
    </ul>)
    );

export default class ProfilePage extends React.Component {
    render() {
        return (
            <div className='profile-container'>
                <h2>Profile page</h2>
                <AddUser />
                <ClearUsers />
                <ShowUserList />
            </div>
        );
    }
}