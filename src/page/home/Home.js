import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 0.8,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      error: null,
    };
  }
  componentDidMount() {
    Geolocation.getCurrentPosition(
      possition => {
        this.setState({
          latitude: possition.coords.latitude,
          longitude: possition.coords.longitude,
          error: null,
        });
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000},
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker coordinate={this.state} title={'your location'} description={this.state.latitude.toString()} />
        </MapView>
      </View>
    );
  }
}

export default Home;
