import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263238',
  },
  secondView: {
    flex: 1,
    borderColor: 'white',
    borderWidth: 3,
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#78909C',
    elevation: 5,
  },
  titleView: {
    flex: 0.1,
    borderColor: 'white',
    borderWidth: 2,
    margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#455A64',
    elevation: 5,
    flexDirection:'row'
  },
  titleText: {
    fontFamily: 'IRANSansMobile_Bold',
    fontSize: 18,
    margin: 20,
    color:'#DCEDC8'
  },
  thView: {
    flex: 0.9,
    borderColor: 'white',
    borderWidth: 2,
    margin: 15,
    borderRadius: 20,
    backgroundColor: '#455A64',
  },
  contentText: {
    fontFamily: 'IRANSansMobile_Light',
    fontSize: 18,
    margin:5
  },
  animView: {
    flex: 0.5,
    flexDirection: 'column-reverse',
  },
  buttonView: {
    flex: 0.2,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  fButton: {
    //first
    margin: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor:'tomato'
  },
  buttonText: {
    fontFamily: 'IRANSansMobile_medium',

  },
  sButton: {
    //second
    margin: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor:'tomato'
  },
  fButtonLeft: {
    width: 20,
    margin: 5,
    marginRight: 0,
  },
  sButtonRight: {
    width: 20,
    margin: 5,
    marginLeft: 0,
  },
});
export default styles;
