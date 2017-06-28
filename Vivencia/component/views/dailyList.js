import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ListView,
  ScrollView,
  Text,
  TextInput,
  Image,
  Dimensions,
  Button,
} from 'react-native';

import Hr from 'react-native-hr';
import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';

const firebaseConfig = {
apiKey: "AIzaSyCdf_99OpPdugQPtnK6wh08P9QDlamdnG8",
authDomain: "daily-travel-6ff5f.firebaseapp.com",
databaseURL: "https://daily-travel-6ff5f.firebaseio.com",
projectId: "daily-travel-6ff5f",
storageBucket: "daily-travel-6ff5f.appspot.com",
messagingSenderId: "651940849732"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class DailyList extends Component{

  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      name: null,
      experience: null,
      tips: null,
      dataSource: ds.cloneWithRows([null]),
    };
  }

  onPressAddDaily(){
    alert(this.state.name);
    firebaseApp.database().ref().child('daily/').push({
      name: this.state.name,
      experience: 'explicacion de 5 parrafos',
      tips: 'recomendaciones',
    });
    alert(this.state.name);
  }

  // {/*static navigationOptions = {
  //   header: null,
  //   title: 'Welcome',
  // };*/}

  render() {

    {/*const { navigate } = this.props.navigation;*/}

    return(
      <View>
        {/*<Button onPress={() => navigate('AddDaily', { user: 'Lucy' })}
          title="Add daily"
          color="#841584"
        />*/}

        <TextInput style={{width:300}}
          onChangeText={(text) => this.setState({name:text})}
          Value={this.state.name}
        />

        <Button onPress={this.onPressAddDaily.bind(this)}
          title="Add daily"
          color="#841584"
        />

        <ScrollView>

          <Hr lineColor='#b3b3b3' text='Diario patito' textColor='steelblue' />

          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <Image  style={{width: Dimensions.get('window').width, height: 50}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}>
                {rowData}
              </Image>}
          />
        </ScrollView>
      </View>
    );
  }
}


// class AddNewDaily extends Component{
//
//   addNewDaily(){
//     firebaseApp.database().ref().child('daily/').update({
//       name: 'patito',
//       experience: 'explicacion de 5 parrafos'
//       tips: 'recomendaciones'
//     });
//     alert('Hola mundo ya entre');
//   }
//
//   render() {
//     return (
//       <View>
//
//
//         <Button
//           onPress={() => this.addNewDaily()}
//           title="Add daily"
//         />
//       </View>
//     );
//   }
// }

const DailyTravel = StackNavigator({
  Home: {screen: DailyList},
  // AddDaily: { screen: AddNewDaily },
});

AppRegistry.registerComponent('DailyList', () => DailyList);

module.export='DailyList';
