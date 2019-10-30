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
        center: {
            lat: 53.893009,
            lng: 27.567444
        },
        zoom: 7,
        markers: defaultMarkers,
    };

    constructor(props) {
        super(props);
        navigator.geolocation.getCurrentPosition(
            function (position) {
                ymaps
                    .load('https://api-maps.yandex.ru/2.1/?apikey=YOUR-API-KEYf&lang=en_US')
                    .then(maps => {
                        const map = new maps.Map('map', {
                            center: [position.coords.latitude, position.coords.longitude],
                            zoom: 13,
                            controls: ['smallMapDefaultSet'],
                        });
                        var myClusterer = new maps.Clusterer();
                        props.markers.map((marker) => {
                            const myGeoObject = new maps.GeoObject(marker);
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
            <div id="map" style={{ width: 600, height: 400 }}></div>
        );
    }
}

export default MapComponent;