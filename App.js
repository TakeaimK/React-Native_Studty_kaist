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
  TextInput,
  Button,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
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

const str1="I am Sejin Choi"

const str2="✨✨✨"

type Props = {};
export default class App extends Component<Props>{
  constructor(props){
     super(props);
     this.state={text:""}
  }

  _onPressButton(){
    Alert.alert('you tapped the button!');
  }
  _onLongPressButton(){
    Alert.alert('you long press the button!');
  }
  render(){
    let pic = {
      uri : 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    }
    return (
        <View style={{
          flex:1, 
          justifyContent: 'center',
          alignItems:'center',
          flexDirection:'column',
          padding: 10}}>
          <TextInput style={{height:40}} 
          placeholder="Type Here!" 
          onChangeText={(text)=>this.setState({text})} />
          <Text style={{padding: 10, fondSize:42}}>
            {this.state.text.split(' ').map((word)=> word&&'✨').join('')}
          </Text>
          <View style={styles.button}>
            <Button style={{margin:20, fontSize:30}}
              onPress={()=>{
              Alert.alert('you tapped the button!');
            }}
            title="일반 버튼"
            color="black"
            />
          </View>
          <TouchableHighlight
            onPress={this._onPressButton}
            underlayColor="white"
            >
              <View style={styles.touch}>
                <Text style={styles.white}>터치 가능한 영역</Text>
              </View>
          </TouchableHighlight>
          <TouchableOpacity
             onPress={this._onPressButton}
             >
             <View style={styles.touch}>
                <Text style={styles.white}>터치 반응이 있는 영역</Text>
              </View>
          </TouchableOpacity>
          <TouchableWithoutFeedback
             onPress={this._onPressButton}
             >
               <View style={styles.touch}>
                <Text style={styles.white}>피드백 없는 터치 가능 영역</Text>
              </View>
             </TouchableWithoutFeedback>
        </View>
     
        
    );
  }
}

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
  white:{
    color:'white',
  },
  button:{
    margin:20,
    fontSize:40,
  },
  touch:{
    marginBottom:30,
    width:260,
    height:100,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue',
    color:'white',
  },
  
});


