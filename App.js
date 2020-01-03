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
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>  
      <Text style={styles.title}>Hi</Text>
      <Image source={pic} style={{width:300, height:100}} />
      <MyName name="Choi"/>
      <MyName name="Kim"/>
      <Blink text="테스트입니다"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
