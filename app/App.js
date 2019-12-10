import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CityCarousel from './CityCarousel'

export default class App extends React.Component {

  render = () => {
    return (
        <CityCarousel/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
});
