import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button, Icon} from 'native-base';
import LottieView from 'lottie-react-native';
import styles from './style';
class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  stepTwo() {
    this.props.navigation.navigate('StepTwo');
  }
  goLogin() {
    this.props.navigation.replace('Login');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.secondView}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>دیگه نمی خواد عجله کنی</Text>
          </View>
          <View style={styles.thView}>
            <View style={{flex: 0.5}}>
              <Text style={styles.contentText}>سلام</Text>
            </View>
            <View style={styles.animView}>
              <LottieView
                source={require('../../../animations/StepOne.json')}
                autoPlay
              />
            </View>
            <View style={styles.buttonView}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row-reverse',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button
                  style={styles.fButton}
                  onPress={this.stepTwo.bind(this)}>
                  <Text style={styles.buttonText}>بعدی</Text>
                  <Icon name="arrow-round-forward" />
                </Button>
                <Button style={styles.fButtonLeft}></Button>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row-reverse',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Button style={styles.sButtonRight}></Button>
                <Button style={styles.sButton}>
                  <Text style={styles.buttonText}>بلدم !</Text>
                  <Icon name="checkmark" onPress={this.goLogin.bind(this)} />
                </Button>
              </View>
            </View>
            <View
              style={{
                flex: 0.1,
                flexDirection: 'row-reverse',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                style={{margin: 5}}
                name="radio-button-off"
                onPress={this.stepTwo.bind(this)}
              />
              <Icon style={{margin: 5}} name="radio-button-on" />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default StepOne;
