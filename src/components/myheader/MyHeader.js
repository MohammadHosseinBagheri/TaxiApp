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
      <Header style={{backgroundColor:'#607D8B',elevation:10}}>
        <Left style={{margin:5}}>
            {left}
        </Left>
        <Body style={{justifyContent:'center',alignItems:'flex-end',margin:5}}>
            {body}
        </Body>
        <Right style={{padding:5,margin:5}}>
            {right}
        </Right>
      </Header>
    );
  }
}

export default MyHeader;
