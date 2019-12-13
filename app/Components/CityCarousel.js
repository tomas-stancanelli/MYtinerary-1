import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default class CityCarousel extends React.Component {
  constructor(props){
    super();
    this.state = {
      errors: []
    }

    this.props = props;
    this.init();
  }

  init(){
    this.state = {
      images:[ 
        [
          {
          id: "Buenos Aires",
          thumbnail: "http://novotour.com.ar/wp-content/uploads/2010/08/ba9-1024x576.jpg"
        }, {
          id: "Oslo",
          thumbnail: "http://carismaviajes.com/wp-content/uploads/2017/01/Oslo21-2-1024x576.jpg"
        }, {
          id: "Oslo",
          thumbnail: "https://cdn.reto.com/wp-content/uploads/2019/04/DSC08190-1024x576.jpg"
        }, {
          id: "London",
          thumbnail: "http://www.bhmpics.com/download/palace_of_westminster_thames_river_london-1024x576.jpg"
        }
      ],
        [
          {
          id: "Berlin",
          thumbnail: "https://ciceroneplus.es/wp-content/uploads/2019/08/berlin-puerta-de-brandemburgo-1024x576.jpg"
        }, {
          id: "Madrid",
          thumbnail: "https://i.pinimg.com/originals/9a/56/fa/9a56fad71e427e936d598c45cdb5d146.jpg"
        }, {
          id: "Rome",
          thumbnail: "https://i.ytimg.com/vi/nUoUCIPKa2I/maxresdefault.jpg"
        }, {
          id: "Paris",
          thumbnail: "https://c.wallhere.com/photos/95/e6/trees_light_paris_france_art_architecture_night_digital-1058381.jpg!d"
        }
      ],
        [
          {
          id: "Bucharest",
          thumbnail: "http://yesofcorsa.com/wp-content/uploads/2019/11/Bucharest-Desktop-Wallpaper-1024x576.jpg"
        }, {
          id: "Budapest",
          thumbnail: "https://www.lugaresturisticos.pro/wp-content/uploads/2019/06/Hungary-Budapest-parliament-night-lights-water-Danube-river-Wallpaper-1024x576.jpg"
        }, {
          id: "Hamburg",
          thumbnail: "https://s5.cdn.ventureburn.com/wp-content/uploads/sites/2/2019/01/HAmburg-1024x576.jpeg"
        }, {
          id: "Warsaw",
          thumbnail: "https://mypeopleandmyplaces.com/wp-content/uploads/2019/08/20151105_162159-1024x576.jpg"
        }
      ],
    ]
    }
  }

  _renderItem = ( {item, index} ) => {
    return (
      <View style={styles.container}>
        {item.map((img, index) =>
          <Image key={index}
            style={styles.image}
            source={{uri: img.thumbnail}}
          />
        )}
      </View>
    );
  }

  render = () => {
    return (
        <Carousel
          data={this.state.images}
          renderItem={this._renderItem}
          sliderWidth={410}
          itemWidth={410}
        />
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
  image: {
    width: '45%', 
    height: 150,
    margin: 5
  },
});
