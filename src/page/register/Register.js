import React, {Component} from 'react';
import {View, Text, Image,StatusBar} from 'react-native';
import {Item, Input,Button} from 'native-base';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar hidden />
        <Image source={require('../../../assets/img/list.png')} />
        <View style={{justifyContent: 'center', alignItems: 'center',margin:10,marginLeft:30,marginRight:35}}>
          <Item>
            <Input placeholder={'نام'} />
          </Item>
          <Item>
            <Input placeholder={'نام خانوادگی'} />
          </Item>
          <Item>
            <Input placeholder={'شماره همراه'} />
          </Item>
          <Item>
            <Input placeholder={'ایمیل'} />
          </Item>
          <Button style={{width:150,margin:20,justifyContent:'center',backgroundColor:'#81C784'}} onPress={()=>this.props.navigation.pop()} >
            <Text>ثبت نام</Text>
          </Button>
          <Text> با پر کردن این فرم با قوانین موافقت میکنید</Text>
        </View>
      </View>
    );
  }
}

export default Register;
