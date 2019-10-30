import React, {Component} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {Icon, Item, Input, Button} from 'native-base';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _phoneNuber: '',
      _phoneNumberErr:false,
    };
  }
  Login() {
    if(this.state._phoneNuber==""){
      this.setState({
        _phoneNumberErr:true
      })
      return
    }
    this.props.navigation.replace('Home');
  }
  setPhoneNumber(text) {
    this.setState({
      _phoneNuber: text,
      _phoneNumberErr:false
    });
  }
  render() {
    return (
      <View>
        <StatusBar hidden />
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
            <Text style={{marginRight: 5,fontFamily:'IRANSansMobile_Bold',fontSize:16,color:'#00C853'}}>ورود با استفاده از شماره همراه</Text>
            <Icon name="log-in" />
          </View>
          <Item style={{margin: 10  ,borderBottomWidth:0}} >
            <Input style={{fontFamily:'IRANSansMobile'}} keyboardType={'number-pad'} placeholder={'شماره موبایل'} onChangeText={this.setPhoneNumber.bind(this)} underlineColorAndroid={(this.state._phoneNuber=='')?'red':'green'} />
            <Icon name={'call'} style={{color:(this.state._phoneNuber=='')?'red':'green'}} />
          </Item>
          {
            this.state._phoneNumberErr==false?null:(<Text style={{fontFamily:'IRANSansMobile_Light',color:'#f44336'}}>شماره موبایل درست نیست</Text>)
          }
          <Button
            style={{
              width: 100,
              margin: 10,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#81C784',
            }}
            onPress={this.Login.bind(this)}>
            <Text style={{fontFamily:'IRANSansMobile_Medium',color:'white'}} >ورود</Text>
          </Button>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontFamily:'IRANSansMobile_Medium',color:'black',fontSize:13}} >عضو نیستید؟</Text>
            <Button
              style={{marginLeft: 5}}
              transparent
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={{fontFamily:'IRANSansMobile_Bold',color:'tomato',fontSize:16}}>ثبت نام کنید</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
