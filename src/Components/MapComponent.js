import  React  from 'react';
import ymaps from 'ymaps';
const defaultMarkers = [
    {
        geometry: {
            type: "Point",
            coordinates: [53.946629, 27.569268]
        },
        properties: {
            iconContent: 'marker',
            hintContent: 'hintContent'
        }
    },
    {
        geometry: {
            type: "Point",
            coordinates: [53.938229, 27.577192]
        },
        properties: {
            iconContent: 'marker',
            hintContent: 'hintContent'
        }
    },
    {
        geometry: {
            type: "Point",
            coordinates: [53.939920, 27.565751]
        },
        properties: {
            iconContent: 'marker',
            hintContent: 'hintContent'
        }
    },
    {
        geometry: {
            type: "Point",
            coordinates: [53.941792, 27.570036]
        },
        properties: {
            iconContent: 'marker',
            hintContent: 'hintContent'
        }
    },
]



class MapComponent extends React.Component {
    static defaultProps = {
        markers: defaultMarkers,
    }

    constructor(props) {
        super(props);
        this.state = {
            flats: props.flats
        }
        navigator.geolocation.getCurrentPosition(
            function (position) {
                ymaps
                    .load('https://api-maps.yandex.ru/2.1/?apikey=a22d3f18-cbce-4ad2-8174-f12d0730bd7f&lang=en_US')
                    .then(maps => {
                        const map = new maps.Map('map', {
                            center: [position.coords.latitude, position.coords.longitude],
                            zoom: 13,
                            controls: ['smallMapDefaultSet'],
                        });
                        var myClusterer = new maps.Clusterer();
                        console.log(props);
                        props.flats.flats.map((flat) => {
                            const myGeoObject = new maps.GeoObject(flat.marker, { preset: 'islands#blueStretchyIcon',});
                            myClusterer.add(myGeoObject);
                        });
                        map.geoObjects.add(myClusterer);
                    })
                    .catch(error => console.log('Failed to load Yandex Maps', error));

            }
        );
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div id="map" style={{ width: `90%`, height: 400 }}></div>
        );
    }
}

// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends React.Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyD0MS5WQ832jtVQcdETmC-RZGifAYOUEmg' }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

export default MapComponent;

