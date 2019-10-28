import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';

import MapView, {Marker, ProviderPropType} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import getDistance from 'geolib/es/getDistance';
import {convertDistance} from 'geolib';
import MyHeader from '../../components/myheader/MyHeader';
import {Icon, Button} from 'native-base';
import HomeModal from '../../components/homeModalBox/HomeModal';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

class DefaultMarkers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 0,
      longitude: 0,
      error: null,
      latitudeDelta: 0,
      longitudeDelta: 0,
      markers: [],
      mabda: 0,
      maghasd: 0,
      money: 0,
      mabdaLat: 0,
      mabdaLgn: 0,
      maghsadLat: 0,
      maghsadLgn: 0,
    };
  }
  openModal() {
    this.refs.myModal.modalOpen();
  }
  componentDidMount() {
    Geolocation.getCurrentPosition(
      possition => {
        this.setState({
          latitude: possition.coords.latitude,
          longitude: possition.coords.longitude,
          latitudeDelta: possition.coords.latitude,
          longitudeDelta: possition.coords.longitude,
          error: null,
        });
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 200000},
    );
    this.openModal();
  }

  async onMapPress(e) {
    if (this.state.markers.length <= 1) {
      this.setState({
        markers: [
          ...this.state.markers,
          {
            coordinate: e.nativeEvent.coordinate,
            key: id++,
            color: randomColor(),
          },
        ],
      });
      if (this.state.markers.length == 0) {
        await this.setState({
          mabda: e.nativeEvent.coordinate,
          mabdaLat: e.nativeEvent.coordinate.latitude,
          mabdaLgn: e.nativeEvent.coordinate.longitude,
        });
        console.log(this.state.mabda);
      } else {
        await this.setState({
          maghasd: e.nativeEvent.coordinate,
          maghsadLat: e.nativeEvent.coordinate.latitude,
          maghsadLgn: e.nativeEvent.coordinate.longitude,
        });
        console.log(this.state.maghasd);
        var distance = await getDistance(this.state.mabda, this.state.maghasd);
        console.log(distance);
        distance = convertDistance(distance, 'km');
        console.log(distance);
        const money = await this.calculateMoney(distance);
        await this.setState({
          money: money,
        });
        console.log(this.state.money);
      }
    }
  }
  calculateMoney(distance) {
    return Math.round(distance) * 2500;
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <MyHeader
          right={
            <Icon
              name="menu"
              onPress={() => this.props.navigation.toggleDrawer()}
            />
          }
          body={<Text>تاکسی آنلاین</Text>}
          left={<Image source={require('../../../assets/img/taxi50x50.png')} />}
        />
        <MapView
          style={styles.map}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          onPress={this.onMapPress.bind(this)}>
          <Marker
            icon={require('../../../assets/img/currentlocation40x40.png')}
            coordinate={this.state}
            title={'اینجا هستم'}
          />

          {this.state.markers.map(marker => (
            <Marker
              icon={
                marker.key == 0
                  ? require('../../../assets/img/mabda40x40.png')
                  : require('../../../assets/img/maghsad40x40.png')
              }
              key={marker.key}
              coordinate={marker.coordinate}
              //pinColor={marker.color}
              title={marker.key == 0 ? 'مبدا' : 'مقصد'}
            />
          ))}
        </MapView>
        <View style={{backgroundColor:'#80CBC4',flex:1,flexDirection:'column',margin:10,borderRadius:15}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
              margin:10
            }}>
            <Text>هزینه سفر : </Text>
            <Text>{this.state.money} تومان</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Button
              style={{
                justifyContent: 'center',
                display: this.state.money != 0 ? 'flex' : 'none',
                backgroundColor: 'tomato',
                width: 150,
                margin: 15,
                borderRadius: 15,
                elevation: 10,
              }}>
              <Text>درخواست سرویس</Text>
            </Button>
          </View>
        </View>
        <HomeModal ref={'myModal'} />
      </View>
    );
  }
}

DefaultMarkers.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  map: {
    width: '100%',
    height: '85%',
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default DefaultMarkers;
