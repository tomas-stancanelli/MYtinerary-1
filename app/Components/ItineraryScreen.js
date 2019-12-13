import React from 'react';
import {Text,View} from 'react-native';
import UserItinLikeScreen from './UserItinLikeScreen';
//import UserItinLikeScreen from UserItinLikeScreen

export default class ItineraryScreen extends React.Component {
    constructor(props){
      super();
  
      this.props = props;

      this.state = {
          city: this.props.navigation.state.params.city
      }
    }
  
    render = () => {
        return (
            <View>
                <Text>{this.state.city.name}</Text>
                <UserItinLikeScreen />
            </View>
            
        );
    }
  }