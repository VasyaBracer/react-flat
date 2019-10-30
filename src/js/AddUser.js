import React from 'react';
import { connect } from 'react-redux';

export default LoadDataButton = connect(
    null,
    (dispatch) => ({
      addUser: () => {
        dispatch({
          type: 'addUser',
          payload: {
            nickname: 'ADDDED',
            password: 'sdhfsgffg',
            description: 'USER',
        },
        });
      },
    })
  )((props) => (
    <button onClick={() => props.addUser()}>Load data</button>
  ));
