import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, StyleSheet} from 'react-native';
import { Container, Content, Text, Form, Item, Label, Input, Button, Left, Header, Icon, Body, Title, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';
import AppIntroSlider from 'react-native-app-intro-slider';
import Loading from './Loading';
import Messages from './Messages';
// import Header from './Header';
import Spacer from './Spacer';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
    };
  }

  _onDone = () => {
    // User finished the introduction. Show "real" app
  }

  render() {
    return (
      <Container >
      <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>SignUp</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.center}>
          <Image source={require('../../images/launch-g.gif')} style={styles.centeredImage}></Image>
          <Title style={[styles.title, styles.center]}>Signup with you google account</Title>
        </View>
      </Container>
    );
  }
}

let styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'stretch',
  },
  image: {
    flex: 1,
  },
  innerView:{
    margin: '0px auto',
    height: '150px'
  },
  imageIntro: {
    width: 320,
    height: 320,
  },
  center:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color:'#2f2f2f',
    fontSize:20,
    marginTop: 30
  },
  centeredImage:{
    justifyContent: 'center',
    // flex: 1,
    alignItems: 'center',
    width:250,
    height:250,
    margin:24
  }
});

const slides = [
  {
    key: 'somethun',
    title: 'Campus Locate',
    text: 'Find places around you',
    color:'#2a2a2a',
    image: require('../../images/launch-g.gif'),
    imageStyle: styles.imageIntro,
    backgroundColor: '#ffffff'
  },
  {
    key: 'somethun-dos',
    title: 'Ease of Use',
    text: 'all location details are provided by the people around you',
    image: require('../../images/launcicon.png'),
    imageStyle: styles.imageIntro,
    backgroundColor: '#febe29'
  },
  {
    key: 'somethun1',
    title: 'Add Locations',
    text: 'Feel free to add locations of your choosing',
    image: require('../../images/background.png'),
    imageStyle: styles.imageIntro,
    backgroundColor: '#22bcb5'
  }
];

export default SignUp;
