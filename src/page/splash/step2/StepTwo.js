import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button, Icon} from 'native-base';
import LottieView from 'lottie-react-native';
import styles from './style';
class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  stepOne() {
    this.props.navigation.navigate('StepOne');
  }
  goLogin(){
    this.props.navigation.replace('Home')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.secondView}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}> راهنمایی  </Text>
          </View>
          <View style={styles.thView}>
            <View style={{flex: 1}}>
              <Text style={styles.contentText}>خوبی</Text>
            </View>
            <View style={styles.buttonView}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row-reverse',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button style={styles.sButton} onPress={this.goLogin.bind(this)} >
                  <Text style={styles.buttonText}>بلدم ! </Text>
                  <Icon name="checkmark" />
                </Button>
              </View>
              <View style={{width:120,borderWidth:2}} ></View>
            </View>
            <View
              style={{
                flex: 0.1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                style={{margin: 5}}
                name="radio-button-off"
                onPress={this.stepOne.bind(this)}
              />
              <Icon style={{margin: 5}} name="radio-button-on" />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default StepTwo;
