import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import citiesList from './cities'

export default class CityCarousel extends React.Component {
  constructor(props){
    super();
    this.state = {
      images: {}
    }

    this.props = props;
  }

  componentDidMount(){
    this.setState({images: citiesList});
  }

  getRandomCities(numOfGroups){
    var temparray = [];
    var i,j;
    var groupLength;

    if(this.state.images.list) {
      groupLength = Math.floor(this.state.images.list.length / numOfGroups);
      for (i = 0, j = this.state.images.list.length; i < j; i += groupLength) {
        temparray.push(this.state.images.list.slice(i,i+groupLength));
      }    
    }

    return temparray;
  }

  _renderItem = ( {item, index} ) => {
    return (
      <View style={{width: '100%', height: '100%',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center', 
      alignItems: 'center'}}>
        {item.map((img, index) =>
          <View style={styles.container}>
            <Text style={styles.text}>{img.name}</Text>
            <Image key={index}
              style={styles.image}
              source={{uri: img.thumbnail}}
            />
          </View>
        )}
      </View>
    );
  }

  render = () => {
    return (
        <Carousel
          data={this.getRandomCities(3)}
          renderItem={this._renderItem.bind(this)}
          sliderWidth={410}
          itemWidth={410}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '45%',
    justifyContent: 'center', 
    alignItems: 'center',
    margin: 5
  },
  image: {
    width: '100%', 
    height: 150
  },
  text: {
    color: 'white',
    position: 'absolute', 
    zIndex: 9
  }
});