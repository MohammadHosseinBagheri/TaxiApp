import React, {Component} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {Item, Input, Button, Icon} from 'native-base';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _name: '',
      _lastName: '',
      _phoneNumber: '',
      _email: '',
      _error: false,
    };
  }
  setName(text) {
    this.setState({
      _name: text,
      _error: false,
    });
  }
  setLastName(text) {
    this.setState({
      _lastName: text,
      _error: false,
    });
  }
  setPhoneNumber(text) {
    this.setState({
      _phoneNumber: text,
      _error: false,
    });
  }
  setEmail(text) {
    this.setState({
      _email: text,
      _error: false,
    });
  }
  register() {
    if (
      this.state._name == '' ||
      this.state._lastName == '' ||
      this.state._phoneNumber == '' ||
      this.state._email == ''
    ) {
      this.setState({
        _error: true,
      });

      return;
    }
    this.props.navigation.pop();
  }
  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <StatusBar hidden />
        <Image
          resizeMode={'stretch'}
          style={{width: 200, height: 200}}
          source={require('../../../assets/img/register.png')}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
            marginLeft: 30,
            marginRight: 35,
          }}>
          <Item style={{borderBottomWidth: 0}}>
            <Input
              underlineColorAndroid={this.state._name != '' ? 'green' : 'red'}
              placeholder={'نام'}
              onChangeText={this.setName.bind(this)}
              style={{fontFamily:'IRANSansMobile'}}
            />
            <Icon name={'person'} style={{color:(this.state._name!="")?'green':'red'}} />
          </Item>
          <Item style={{borderBottomWidth: 0}}>
            <Input
              underlineColorAndroid={
                this.state._lastName != '' ? 'green' : 'red'
              }
              placeholder={'نام خانوادگی'}
              onChangeText={this.setLastName.bind(this)}
              style={{fontFamily:'IRANSansMobile'}}
            />
            <Icon name={'person'} style={{color:(this.state._lastName!="")?'green':'red'}} />
          </Item>
          <Item style={{borderBottomWidth: 0}}>
            <Input
              keyboardType={'phone-pad'}
              underlineColorAndroid={
                this.state._phoneNumber != '' ? 'green' : 'red'
              }
              placeholder={'شماره همراه'}
              onChangeText={this.setPhoneNumber.bind(this)}
              style={{fontFamily:'IRANSansMobile'}}
            />
            <Icon name={'call'} style={{color:(this.state._phoneNumber!="")?'green':'red'}} />
          </Item>
          <Item style={{borderBottomWidth: 0}}>
            <Input
              keyboardType={'email-address'}
              underlineColorAndroid={this.state._email != '' ? 'green' : 'red'}
              placeholder={'ایمیل'}
              onChangeText={this.setEmail.bind(this)}
              style={{fontFamily:'IRANSansMobile'}}
            />
            <Icon name={'mail'} style={{color:(this.state._email!="")?'green':'red'}} />
          </Item>
          {this.state._error ? (
            <Text style={{marginTop: 20, color: 'tomato',fontFamily:'IRANSansMobile_Bold'}}>
              تمام فیلد ها را پر کنید
            </Text>
          ) : null}
          <Button
            style={{
              width: 150,
              margin: 20,
              justifyContent: 'center',
              backgroundColor: '#81C784',
            }}
            onPress={this.register.bind(this)}>
            <Text style={{fontFamily:'IRANSansMobile',color:'white'}}>ثبت نام</Text>
          </Button>
          <Text style={{fontFamily:'IRANSansMobile_Bold',color:'#00E676'}}> با پر کردن این فرم با قوانین موافقت میکنید</Text>
        </View>
      </View>
    );
  }
}

export default Register;
