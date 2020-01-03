/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class MyName extends Component {
  render() {
    return(
      <View style={{alignItems : 'center'}}>
        <Text> My name is : {this.props.name}</Text>
      </View>
    )
  }
}

class Blink extends Component{
  constructor(props){
      super(props);
      this.state = {isShowingText: true}

      setInterval(()=>(this.setState(
        prevState => (
          {isShowingText: !prevState.isShowingText})
          )), 1000);
  }
  render(){
    if(!this.state.isShowingText){
      return null;
    }
    return(
      <Text>{this.props.text}</Text>
    );
  }
}


const App: () => React$Node = () => {
  let pic = {
    uri : 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
  }
  return (
    
      <View style={{
        flex:1, 
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row'}}>
        
        <View style={{width:50, height:50, backgroundColor:'powderblue'}}/>
        <View style={{width:50, height:50, backgroundColor:'skyblue'}}/>
        <View style={{width:50, height:50, backgroundColor:'steelblue'}}/>
      </View>
   
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    //backgroundColor: 'powderblue',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  bigBlue: {
    color: 'blue',
    fontWeight:'bold',
    fontSize:20,
  },
  red:{
    color:'red',
  },
});

export default App;
