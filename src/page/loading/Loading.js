import React, {Component} from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './style';
import {Button} from 'native-base';
class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('Login');
    }, 500);
  }
  render() {
    return (
      <View style={styles.container}>
        <LottieView source={require('../../animations/taxi.json')} autoPlay />
        <View style={styles.textView}>
          <Text style={styles.text}> تاکسی آنلاین </Text>
        </View>
      </View>
    );
  }
}

export default Loading;
