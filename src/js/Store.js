import { createStore } from 'redux';
import { List, fromJS } from 'immutable';



const initialState = {
  flats: [
    {
      title: 'flatTitle1',
      marker: {
        geometry: {
          type: "Point",
          coordinates: [53.941792, 27.570036]
        },
        properties: {
          iconContent: 'marker',
          hintContent: 'hintContent'
        }
      },
      description: 'TestDescription',
    },
    {
      title: 'flatTitle2',
      marker: {
        geometry: {
          type: "Point",
          coordinates: [53.939920, 27.565751]
        },
        properties: {
          iconContent: 'marker',
          hintContent: 'hintContent'
        }
      },
      description: 'TestDescription',
    },
    {
      title: 'flatTitle3',
      marker: {
        geometry: {
          type: "Point",
          coordinates: [53.946629, 27.569268]
        },
        properties: {
          iconContent: 'marker',
          hintContent: 'hintContent'
        }
      },
      description: 'TestDescription',
    },
  
    {
      title: 'flatTitle4',
      marker: {
        geometry: {
          type: "Point",
          coordinates: [53.938229, 27.577192]
        },
        properties: {
          iconContent: 'marker',
          hintContent: 'hintContent',
        }
      },
      description: 'TestDescription',
    }
  
  ],
  users: [
    {
      nickname: 'vasya',
      password: 'sdhfsgffg',
      description: 'test',
    },
    {
      nickname: 'vasya2',
      password: 'sdhfsgffg',
      description: 'test',
    },
    {
      nickname: 'vasya3',
      password: 'sdhfsgffg',
      description: 'test',
    },
    {
      nickname: 'vasya4',
      password: 'sdhfsgffg',
      description: 'test',
    },
    {
      nickname: 'vasya5',
      password: 'sdhfsgffg',
      description: 'test',
    },
    {
      nickname: 'vasya6',
      password: 'sdhfsgffg',
      description: 'test',
    },
  ],
  isEmpty: false,
}


function removeItemWithSlice(index, arr) {
  const firstArr = arr.slice(0, index);
  const secondArr = arr.slice(index + 1);
  return [...firstArr, ...secondArr]
}

function createReducer(state = initialState, action) {
  switch (action.type) {

    case 'addUser':
      let newState = Object.assign({}, state);
      newState.users = [...newState.users, action.payload];
      newState.isEmpty = false;
      return newState;

    case 'clearUsers':
      state = { flats: state.flats, users: [], isEmpty: true, };
      return state;

    case 'removeUser':
      var index = state.users.findIndex(function (user) {
        console.log(user.nickname, action.payload.nickname);
        return user.nickname === action.payload.nickname;
      });
      console.log(index);
      return Object.assign({}, state, {
        users: [
          ...state.users.slice(0, index),
          ...state.users.slice(index+1),
        ]
      });

    case 'addFlat':
      return Object.assign({}, state, {
        flats: [
          ...state.flats,
          action.payload,
        ]
      });
     

    case 'removeFlat':
      var index = state.flats.findIndex(function (flat) {
        console.log(flat.title, action.payload.title);
        return flat.title === action.payload.title;
      });
      console.log(index);
      return Object.assign({}, state, {
        flats: [
          ...state.flats.slice(0, index),
          ...state.flats.slice(index+1),
        ]
      });

    default: return state;
  }
}

let store = createStore(createReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
