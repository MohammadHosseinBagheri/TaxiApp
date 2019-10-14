import React, {Component} from 'react';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import {Image} from 'react-native';
import {View, Text} from 'react-native';
import {Icon, Item} from 'native-base';

class MyDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>
        <View style={{flex: 0.2, backgroundColor: '#37474F'}}>
          <AwesomeButtonRick
            onPress={() => this.props.navigation.closeDrawer()}
            size={'sm'}>
            <Icon name={'power'} />
          </AwesomeButtonRick>
          <Image
            resizeMode={'stretch'}
            style={{flex: 1, width: '100%'}}
            source={require('../../assets/img/logo.png')}
          />
        </View>
        <View
          style={{
            flex: 0.8,
            backgroundColor: '#F5F5F5',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}>
          <Item
            style={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
              margin: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  margin: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                کیف پول
              </Text>
              <Icon style={{margin: 8}} name={'wallet'} />
            </View>
            <View style={{margin: 5}}>
              <AwesomeButtonRick type={'anchor'} size={'medium'}>
                <Text>افزایش اعتبار</Text>
              </AwesomeButtonRick>
            </View>
          </Item>
          <Item
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              margin: 5,
            }}>
            <Text style={{margin: 8}}>اطلاعات کاربری</Text>
            <Icon style={{margin: 8}} name="contact" />
          </Item>
          <Item
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              margin: 5,
            }}>
            <Text style={{margin: 8}}>گردش حساب</Text>
            <Icon name="list-box" style={{margin: 8}} />
          </Item>
          <Item
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              margin: 5,
            }}>
            <Text style={{margin: 8}}>سفر ها</Text>
            <Icon name="logo-model-s" style={{margin: 8}} />
          </Item>
          <Item
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              margin: 5,
            }}>
            <Text style={{margin: 8}}>آدرس های منتخب</Text>
            <Icon name="star" chatbubbles style={{margin: 8}} />
          </Item>
          <Item
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              margin: 5,
            }}>
            <Text style={{margin: 8}}>پیام ها</Text>
            <Icon name="chatbubbles" style={{margin: 8}} />
          </Item>
          <Item
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              margin: 5,
            }}>
            <Text style={{margin: 8}}>پشتیبانی</Text>
            <Icon name="help-circle" style={{margin: 8}} />
          </Item>
          <Item
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              margin: 5,
            }}>
            <Text style={{margin: 8}}>درباره تاکسی آنلاین</Text>
            <Icon name="information-circle" style={{margin: 8}} />
          </Item>
        </View>
      </View>
    );
  }
}

export default MyDrawer;
