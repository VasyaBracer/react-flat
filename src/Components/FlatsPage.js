import React from 'react';
import { connect } from 'react-redux';

import MapComponent from './MapComponent';

import ReactDOM from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class FlatsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: props.flats,
    }
  }

  render() {
    return (
      <div className='flats-container'>
        <h2>Flats page</h2>
        <button onClick={() => this.props.addFlat()}>create</button>
        <ul className='flat-list'>
          {this.state.flats.map((flat) => (
            <li key={Math.random()}>{flat.title}
              <button onClick={() => this.props.removeFlat(flat.title)}>remove</button>
              
            </li>
          ))}
        </ul>
        <MapComponent />
        
      </div>
    );
  }
}

const ShowFlatsPage = connect(
  (state) => ({ flats: state.flats }), // mapStateToProps
  (dispatch) => ({
    removeFlat: (title) => {
      dispatch({
        type: 'removeFlat',
        payload: { title },
      });
    },
    addFlat: () => {
      dispatch({
        type: 'addFlat',
        payload: {
          title: 'flatTitle',
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
      });
    },
  })
)((props) => (
  <FlatsPage flats={props.flats} removeFlat={props.removeFlat} addFlat={props.addFlat} />
));


export default ShowFlatsPage;

