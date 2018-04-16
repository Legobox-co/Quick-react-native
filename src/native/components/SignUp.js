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
      <Container contentContainerStyle={{flex: 1}}>
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
          <Title style={[styles.title, styles.center]}>Signup with your google account</Title>
          <View style={ styles.center}>
            <Button style={[{backgroundColor: 'red', marginTop:20}, styles.center]}>
              <Text>Signin with google</Text>
            </Button>
          </View>
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

export default SignUp;
