/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  SectionList,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  propTypes
} from 'react-native';

export default class rn_demo extends Component {
  // 默认属性
  static defaultProps = {
     autoPlay: false,
     maxLoops: 10,
  }
  // 属性类型
  static propTypes = {
    autoPlay: React.PropTypes.bool.isRequired,
    maxLoops: React.PropTypes.number.isRequired,
    posterFrameSrc: React.PropTypes.string.isRequired,
    videoSrc: React.PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  _onPressButton(){
    // console.log("You tap the button")
    Alert.alert('You tap the button')
  }
  _onLongPressButton(){
    Alert.alert("长按按钮方法")
  }
  render() {
    return (
      <View style={styles.container}>
        
        {/* <View style={{ width: 50, height: 50, backgroundColor: 'powderblue',}} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue',}} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue',}} /> */}
        
        {/* <TextInput
          style={{ height: 40, borderWidth: 1, borderColor: 'black', borderStyle: 'solid', }}
          placeholder='Type here to translate'
          onChangeText={(text) => this.setState({ text })}
        /> */}
        {/* <Text style={{ padding: 10, fontSize: 42, }}>
          {this.state.text}
          {this.state.text.split(' ').map((word)=> word||'🐱').join(' ')}
        </Text> */}
        
        {/* <ScrollView style={{ backgroundColor: 'powderblue' }}>
          <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
          <Text style={{ fontSize: 96 }}>If you like</Text>
          <Text style={{ fontSize: 96 }}>Scrolling down</Text>
          <Text style={{ fontSize: 96 }}>What's the best</Text>
          <Text style={{ fontSize: 96 }}>Framework around?</Text>
          <Text style={{ fontSize: 80 }}>React Native</Text>
        </ScrollView> */}
        
        {/* <FlatList 
          data={[
            { key: 'Devin' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' },
          ]}
          renderItem={({item})=> <Text style={styles.item}>{item.key}</Text>}
        /> */}

        {/* <SectionList 
          sections={[
            { title: 'D', data: ['Devin'] },
            { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
          ]}
          renderItem={({item})=> <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section})=> <Text style={styles.sectionHeader}>{section.title}</Text>}
        /> */}
        <TouchableWithoutFeedback style={{width: 100, backgroundColor: 'red',}} onPress={this._onPressButton}>
          <Text> button 1</Text>
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={this._onPressButton}>
          <Text> button 2</Text>
        </TouchableOpacity>
        <TouchableHighlight style={{backgroundColor: 'red', width: 200,}} onLongPress={this._onLongPressButton}>
          <Text> button 3 </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
  item:{
    padding: 10,
    height: 44,
    fontSize: 18,
  },
  sectionHeader:{
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  }
});

AppRegistry.registerComponent('rn_demo', () => rn_demo);
