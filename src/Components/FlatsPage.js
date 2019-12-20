import React from 'react';
import { connect } from 'react-redux';

import MapComponent from './MapComponent';

import ReactDOM from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

// class FlatsPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       flats: props.flats,
//     }
//   }

//   render() {
//     return (
//       <div className='flats-container'>
//         <h2>Flats page</h2>
//         <button className="create-flat-button" onClick={() => this.props.addFlat()}>create</button>
//         <ul className='flat-list'>
//           {this.state.flats.map((flat) => (
//             <li key={Math.random()}>{flat.title}
//               <button className="remove-flat-button" onClick={() => this.props.removeFlat(flat.title)}>remove</button>
//             </li>
//           ))}
//         </ul>
         
//       </div>
//     );
//   }
// }

// const ShowFlatsPage = connect(
//   (state) => ({ flats: state.flats }), // mapStateToProps
//   (dispatch) => ({
//     removeFlat: (title) => {
//       dispatch({
//         type: 'removeFlat',
//         payload: { title },
//       });
//     },
//     addFlat: () => {
//       dispatch({
//         type: 'addFlat',
//         payload: {
//           title: 'flatTitle',
//           marker: {
//             geometry: {
//               type: "Point",
//               coordinates: [53.939920, 27.565751]
//             },
//             properties: {
//               iconContent: 'marker',
//               hintContent: 'hintContent'
//             }
//           },
//           description: 'TestDescription',
//         },
//       });
//     },
//   })
// )((props) => (
//   <>
//   <FlatsPage flats={props.flats} removeFlat={props.removeFlat} addFlat={props.addFlat} />
//   <div className='map-container'>
//     <MapComponent flats={props.flats} />   
//   </div> 
//   </>
// ));


// export default ShowFlatsPage;

const CreateFlat = connect(
  null,
  (dispatch) => ({
    addFlat: () => {
      dispatch({
        type: 'addFlat',
        payload: {
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
      });
    },
  })
)((props) => (
  <button onClick={() => props.addFlat()}>Create flat</button>
));

const ClearFlats = connect(
  null,
  (dispatch) => ({
    clearFlats: () => {
      dispatch({
        type: 'clearFlats',
        payload: {},
      });
    },
  })
)((props) => (
  <button className="clear-flats-btn" onClick={() => props.clearFlats()}>clear</button>
));

const ShowFlatsList = connect(
  (state) => ({ flats: state.flats }), // mapStateToProps
  (dispatch) => ({
    removeFlat: (title) => {
      dispatch({
        type: 'removeFlat',
        payload: {title},
      });
    },
  })
)((props) => (
  <>
  <ul className="flats-list">
    {props.flats.map((flat) =>
      (<li className="flats-list-desc" key={Math.random()}>{flat.title}
      <button className="remove-flat-btn" onClick={() => props.removeFlat(flat.title)}>remove</button>
      </li>)
    )}
  </ul>
  <div className='map-container'>
  <MapComponent  flats={props}/>   
  </div> 
  </>
  )
  );

export default class ProfilePage extends React.Component {
  render() {
      return (
          <div className='profile-container'>
              <h2>Whatever page</h2>
              <CreateFlat />
              <ClearFlats />
              <ShowFlatsList />
          </div>
      );
  }
}

