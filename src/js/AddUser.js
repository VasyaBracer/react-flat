import React from 'react';
import { connect } from 'react-redux';

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      passwoed: '',
      description: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDescChange(event) {
    this.setState({ description: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.username.length >= 3 || this.state.password.length >= 3 ) {
    this.props.addUser(this.state);
    event.preventDefault();
    }
  }

  render() {
    return (
      <form  onSubmit={this.handleSubmit}>
        <div className='create-user-form'>
        <div className='user-form-element'><label>
            <div>Username:</div>
            <input className='form-text' type="text" value={this.state.username} onChange={this.handleNameChange} />
        </label>
        </div>
        <div className='user-form-element'>
        <label>
        <div>Password:</div>
            <input className='form-text' type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </label>
        </div>
        <div className='user-form-element'>
        <label>
        <div>Description:</div>
            <input className='form-text' type="text" value={this.state.description} onChange={this.handleDescChange} />
        </label>
        </div>
        <input className='form-submit' type="submit" value="Create" />
        </div>
      </form>
    );
  }
}

const AddUser = connect(
  null,
  (dispatch) => ({
    addUser: (newUser) => {
      dispatch({
        type: 'addUser',
        payload: {
          nickname: newUser.username,
          password: newUser.password,
          description: newUser.description,
        },
      });
    },
  })
)((props) => (
  <CreateUser addUser={props.addUser}>Load data</CreateUser>
));

export default AddUser;