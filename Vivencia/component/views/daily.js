import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ListView,
  ScrollView,
  Text,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';


export default class Daily extends Component{

  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([<Image  style={{width:Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>,
      <Image  style={{width: Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>,
      <Image  style={{width: Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>,
      <Image  style={{width: Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>,
      <Image  style={{width: Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>,
      <Image  style={{width: Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>,
      <Image  style={{width: Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>,
      <Image  style={{width: Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>,
      <Image  style={{width: Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>,
      <Image  style={{width: Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>,
      <Image  style={{width: Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>,
      <Image  style={{width: Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>,
      <Image  style={{width: Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>,
      <Image  style={{width: Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>,
      <Image  style={{width: Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>,
      <Image  style={{width: Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>,
      <Image  style={{width: Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>,
      <Image  style={{width: Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>,
      <Image  style={{width: Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>,
      <Image  style={{width: Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>,
      <Image  style={{width: Dimensions.get('window').width, height: 300}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>]),
    };
  }

  render(){
    return(
      <View style={styles.daily}>
          <ListView horizontal={true}
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <Image style={{margin:10}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}>
                {rowData}
              </Image>}
          />

        <Text>Preiihasdf</Text>
        <TextInput style={styles.textInput}
          numberOfLines = {2}
          editable = {true}
          maxLength = {400}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    justifyContent: 'center',
  },
  daily:{
    justifyContent:'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('Daily', () => Daily);

module.export='Daily';
