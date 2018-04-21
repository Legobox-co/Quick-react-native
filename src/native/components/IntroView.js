import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Text,
  Form,
  Item,
  Label,
  Input,
  Button,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import AppIntroSlider from 'react-native-app-intro-slider';
import Loading from './Loading';
import Messages from './Messages';
import Header from './Header';
import Spacer from './Spacer';

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _onDone = () => {
    // User finished the introduction. Show "real" app
    Actions.signup()
  };

  render() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <AppIntroSlider slides={slides} onDone={this._onDone} activeDotColor='#202020' />
      </View>
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
  innerView: {
    margin: '0px auto',
    height: '150px',
  },
  imageIntro: {
    width: 320,
    height: 320,
  },
});

const slides = [{
    key: 'somethun',
    title: 'Campus Locate',
    text: 'Find places around you',
    color: '#2a2a2a',
    image: require('../../images/Logo.png'),
    imageStyle: styles.imageIntro,
    backgroundColor: '#ffffff',
  },
  {
    key: 'somethun-dos',
    title: 'Ease of Use',
    text: 'all location details are provided by the people around you',
    image: require('../../images/launcicon.png'),
    imageStyle: styles.imageIntro,
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Add Locations',
    text: 'Feel free to add locations of your choosing',
    image: require('../../images/background.png'),
    imageStyle: styles.imageIntro,
    backgroundColor: '#22bcb5',
  },
];

export default Intro;
