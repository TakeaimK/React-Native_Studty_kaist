/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//fetch('')

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
  ScrollView,
  FlatList,
  SectionList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function getMoviesFromApiAsync(){
  return fetch('https://facebook.github.io/react-native/movies.json')
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson.movies;
  })
  .catch((error) => {
    console.log(error);
  })
}

async function getMoviesFromApi(){
  try{
    let response = await fetch('https://facebook.github.io/react-native/movies.json');
    let responseJson = await response.json();
    return responseJson.movies;
  } catch (error) {
    console.log(error);
  }
}

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
     this.state={text:"", isLoading: true}
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
  .then((response) => response.json())
  .then((responseJson) => {
    this.setState({
      isLoading:false,
      dataSource: responseJson.movies,
    })
  })
  .catch(error => console.log(error))
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
    if(this.state.isLoading) {
        return(
          <View>
            <Text>Loading...</Text>
          </View>
        )
      }
    return(
      <View style={{flex:1, paddingTop: 40}}>
        <FlatList
        data={this.state.dataSource}
        renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
        keyExtractor={({id}, index) => id}
        />
      </View>
    )
     
        
  };
}


/*
return(
  
        <View style={{
          flex:1, 
          justifyContent: 'center',
          alignItems:'center',
          flexDirection:'column',
          padding: 10,}}>
          
          <View style={styles.flatList}>
            <FlatList
              data={[
                {key: 'A'},
                {key: 'B'},
                {key: 'C'},
                {key: 'D'},
                {key: 'E'},
                {key: 'F'},
                {key: 'G'},
                {key: 'H'},
                {key: 'I'},
              ]}
              renderItem={({item})=> 

                <Button 
                onPress={()=>{
                  
                  Alert.alert('you tapped the button!');
                }}
                  title={item.key}
                  
                  />}
            />
          </View>

          <View style={styles.sectionList}>
            <SectionList
              sections={[
                {title: 'D', data: ['Devin']},
                {title: 'J', data: ['Jack', 'Jow', 'John']},
              ]}
              renderSectionHeader={({section})=> <Text style={styles.bigBlue}>{section.title}</Text>}
              renderItem={({item})=> <Text>{item}</Text>}
            />
          </View>


          <ScrollView>
            <View style={styles.button}>
              <Button
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

            <TextInput style={{height:40}} 
            placeholder="Type Here!" 
            onChangeText={(text)=>this.setState({text})} />
            <Text style={{padding: 10, fontSize:42}}>
              {this.state.text.split(' ').map((word)=> word&&'✨').join('')}
            </Text>
            <Text style={{padding: 10, fontSize:42}}>
             🎹
            </Text>
            <Text style={{padding: 10, fontSize:42}}>
             🎹
            </Text>
            <Text style={{padding: 10, fontSize:42}}>
             🎹
            </Text>
          </ScrollView>

        </View>
)

*/

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
    padding:10,
    backgroundColor:'gray',
  },
  white:{
    color:'white',
  },
  button:{
    marginBottom:20,
    marginTop:20,
    fontSize:40,
    width:200,
    
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
  flatList:{
    margin:10,
    width:100,
    height:250,
  },
  sectionList:{
    width:300,
    height:150,
    fontSize:30,
  },
  
});


