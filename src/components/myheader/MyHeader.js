import React, {Component} from 'react';
import {View, Text,StatusBar} from 'react-native';
import {Header, Left, Body, Right} from 'native-base';

class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      const {left,body,right}=this.props;
    return (
      <Header style={{backgroundColor:'white',elevation:10}}>
        <Left style={{backgroundColor:'red',margin:5}}>
            {/* {left} */}
            <Text>Left</Text>
        </Left>
        <Body style={{backgroundColor:'blue',justifyContent:'center',alignItems:'flex-end',margin:5}}>
            {/* {body} */}
            <Text>
                Body
            </Text>
        </Body>
        <Right style={{padding:5,margin:5}}>
            {right}
        </Right>
      </Header>
    );
  }
}

export default MyHeader;
