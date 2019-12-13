import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { FlatList } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import {AntDesign} from '@expo/vector-icons';
import Comentarios from './Comentarios'

// type Props = {};
export default class UserItinLikeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: []
        }
    }

    componentDidMount() {
        this.getUserRandoms();
    }

    getUserRandoms = () => {
        const url = 'https://mytinerary-grupo2.herokuapp.com/api/itineraries';
        this.setState({ loading: true })
        fetch(url)
            .then(res => res.json())
            .then(res => {
                // console.log(res.data)
                this.setState({

                    data: res.itinerariesFromRoutes,
                    loading: false,


                });

            });
        console.log('carga de users')
    };
  
    render() {
        return (
            // <List>
            //     <FlatList
            //         data={this.state.data}
            //         renderItem={({ item }) => (
            //             <ListItem
            //                 roundAvatar
            //                 title={item.username}
            //                 subtitle={item.email}
            //                 avatar={{ uri: item.image }}

            //             />

            //         )}

            //     />


            // </List>
            <ScrollView>
                <View style={{ flex: 1, width: '90%' }}>
                    {this.state.data.map(user => {
                        return <ListItem
                            // roundAvatar
                            title={user.username}
                            subtitle={
                                <View>
                                <Text>{user.country}</Text>
                                <Text>{user.city}</Text>
                                <Text>{user.title}</Text>
                                <Text>{user.rating}</Text>
                                <Text>{user.duration}</Text>
                                <Text>{user.price}</Text>
                                <Text> {user.hashtags}</Text>
                                 
                                                                          
                                </View>
                            }
                           
                            leftAvatar={{ source: { uri: user.userPhoto } }}
                           rightAvatar={<AntDesign name="hearto" size={30} color='black'/>}
                            Component={Comentarios}
                            bottomDivider

                            // chevron   
                                                 
                        />

                        // return <View>
                        //     <Text>{user.username}</Text>
                        //     <Text>{user.email}</Text>

                        // </View>
                    })}
                </View>
            </ScrollView>

        );

        // if(this.state.loading){
        //     return (
        //         <View>
        //             <Text> Usuarios Cargando </Text>
        //         </View>
        //     );
        // }

        // return (
        //     <View>
        //         <Text> Los Usuarios ya se encuentran descargados! </Text>
        //     </View>
        // );
    }
}
