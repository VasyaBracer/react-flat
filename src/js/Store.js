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
          iconContent: 'Whatever1',
          hintContent: "Whatever you want",
          balloonContentHeader: "Header",
          balloonContentBody: "Body",
          phone: 11848762
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
          iconContent: 'Whatever2',
          hintContent: "Whatever you want",
          balloonContentHeader: "Header",
          balloonContentBody: "Body",
          phone: 11848762
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
          iconContent: 'Whatever3',
          hintContent: "Whatever you want",
          balloonContentHeader: "Header",
          balloonContentBody: "Body",
          phone: 11848762
        }
      },
      description: 'TestDescription',
    },

    {
      title: 'flatTitle5',
      marker: {
        geometry: {
          type: "Point",
          coordinates: [53.938229, 27.577192]
        },
        properties: {
          iconContent: 'Whatever4',
          hintContent: "Whatever you want",
          balloonContentHeader: "Header",
          balloonContentBody: "Body",
          phone: 11848762
        },
      },
      description: 'TestDescription',
      preset: 'islands#blackStretchyIcon',
    }

  ],
  users: [
    {
      nickname: 'vasya',
      password: 'sdhfsgffg',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis commodo auctor. Aenean vulputate leo fermentum pellentesque convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis urna tortor, consequat ut est vitae, pharetra porttitor odio.',
    },
    {
      nickname: 'vasya2',
      password: 'sdhfsgffg',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis commodo auctor. Aenean vulputate leo fermentum pellentesque convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis urna tortor, consequat ut est vitae, pharetra porttitor odio.',
    },
    {
      nickname: 'vasya3',
      password: 'sdhfsgffg',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis commodo auctor. Aenean vulputate leo fermentum pellentesque convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis urna tortor, consequat ut est vitae, pharetra porttitor odio.',
    },
    {
      nickname: 'vasya4',
      password: 'sdhfsgffg',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis commodo auctor. Aenean vulputate leo fermentum pellentesque convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis urna tortor, consequat ut est vitae, pharetra porttitor odio.',
    },
    {
      nickname: 'vasya5',
      password: 'sdhfsgffg',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis commodo auctor. Aenean vulputate leo fermentum pellentesque convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis urna tortor, consequat ut est vitae, pharetra porttitor odio.',
    },
    {
      nickname: 'vasya6',
      password: 'sdhfsgffg',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis commodo auctor. Aenean vulputate leo fermentum pellentesque convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis urna tortor, consequat ut est vitae, pharetra porttitor odio.',
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
      const isExist = state.users.findIndex(function (user) {
        return user.nickname === action.payload.nickname;
      })
      if (isExist === -1) {
        console.log(isExist);
        let newState = Object.assign({}, state);
        newState.users = [...newState.users, action.payload];
        newState.isEmpty = false;
        return newState;
      }
      return state;

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
          ...state.users.slice(index + 1),
        ]
      });

    case 'addFlat':
      let newState2 = Object.assign({}, state);
      newState2.flats = [...newState2.flats, action.payload];
      newState2.isEmpty = false;
      return newState2;


    case 'clearFlats':
      state = { users: state.users, flats: [], isEmpty: true, };
      return state;

    case 'removeFlat':
      var index = state.flats.findIndex(function (flat) {
        console.log(flat.title, action.payload.title);
        return flat.title === action.payload.title;
      });
      console.log(index);
      return Object.assign({}, state, {
        flats: [
          ...state.flats.slice(0, index),
          ...state.flats.slice(index + 1),
        ]
      });


    default: return state;
  }
}

let store = createStore(createReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
