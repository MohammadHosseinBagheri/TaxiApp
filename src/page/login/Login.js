import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Icon, Item, Input, Button} from 'native-base';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../../../assets/img/list.png')} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{marginRight: 5}}>ورود با استفاده از شماره همراه</Text>
            <Icon name="log-in" />
          </View>
          <Item style={{margin: 10}}>
            <Input keyboardType={'number-pad'} placeholder={'شماره موبایل'} />
            <Icon name={'call'} />
          </Item>
          <Button
            style={{
              width: 100,
              margin: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => this.props.navigation.replace('Home')}>
            <Text>ورود</Text>
          </Button>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>عضو نیستید؟</Text>
            <Button
              style={{marginLeft: 5}}
              transparent
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={{color: 'green'}}>ثبت نام کنید</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
