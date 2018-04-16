import React from 'react';
import PropTypes from 'prop-types';
import { View, Platform, PermissionsAndroid } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { Container, Content, List, ListItem, Body, Left, Text, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Header from './Header';


let styles = {
  container: {
    flex: 1,
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map:{
    position:'absolute',
    width: '100%',
    height: '100%'
  }
}

let initalRegion = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };
const ANCHOR = { x: 0.5, y: 0.5 };

class MapComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      myPosition: null
    };
    this.mounted = false;
  }

  // getting initial user location
  componentDidMount(){
    this.mounted = true;
    if(Platform.OS === 'android'){
      PermissionsAndroid.requestPermission(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then(granted=>{
        if(granted && ths.mounted) {this.watchLocation();}
        });
    }else{
        this.watchLocation()
    }
  }

  watchLocation() {
    // eslint-disable-next-line no-undef
    this.watchID = navigator.geolocation.watchPosition((position) => {
      const myLastPosition = this.state.myPosition;
      const myPosition = position.coords;
      if (!isEqual(myPosition, myLastPosition)) {
        this.setState({ myPosition });
      }
    }, null, this.props.geolocationOptions);
  }
 
  render(){
    return (
      <View style={styles.container}>
      <MapView region={initalRegion} style={styles.map}/>
      </View>
    )
  }
}
// MapComponent.propTypes = {
//   member: PropTypes.shape({}),
//   logout: PropTypes.func.isRequired,
// };

// MapComponent.defaultProps = {
//   member: {},
// };

export default MapComponent;
