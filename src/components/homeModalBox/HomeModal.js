import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Modal from 'react-native-modalbox';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import {Button} from 'native-base';
// import {Button} from 'native-base';
class HomeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  modalOpen() {
    this.refs.myModal.open();
  }
  render() {
    return (
      <Modal
        style={{
          width: '100%',
          height: '40%',
          borderTopLeftRadius:20,
          borderTopRightRadius:20
        }}
        ref={'myModal'}
        position={'bottom'}
        backdrop={true}>
        <View style={{flex: 1}}>
          <View
            style={{
              marginTop: -90,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              resizeMode={'stretch'}
              source={require('../../../assets/img/car.png')}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>چجوری ماشین بگیرم ؟!</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 50, height: 50}}
              source={require('../../../assets/img/currentLocation.png')}
            />
            <Text>مکان فعلی من</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 50, height: 50}}
              source={require('../../../assets/img/mabda40x40.png')}
            />
            <Text> مبدا من</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 50, height: 50}}
              source={require('../../../assets/img/maghsad40x40.png')}
            />
            <Text> مقصد من</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <Text>برای درخواست سرویس مبدا و مقصد را روی نقشه مشخص کنید</Text>
            <Button
              style={{
                marginBottom: 10,
                backgroundColor: '#26A69A',
                width: 70,
                justifyContent: 'center',
              }}
              onPress={() => {
                this.refs.myModal.close();
              }}>
              <Text style={{textAlign: 'center'}}>درخواست</Text>
            </Button>
          </View>
        </View>
      </Modal>
    );
  }
}

export default HomeModal;
