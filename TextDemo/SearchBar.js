import React ,{ Component } from "react";
import { 
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
 } from "react-native";

 export class  SearchBar extends Component {
   constructor(props) {
     super(props);
     this.state = {
         inputText: ''
     };
   }
   textInputValueChange (text) {
    this.setState((state)=>{
      return {
          inputText: text
      }
    })
   }
   btnClick (type) {
     if (type === 1) {
         alert(this.state.inputText);
     } 
   }
   render () {
     return (
        <View style={styles.container}>
          <View style={styles.input_out}>
            <TextInput
              style={styles.input}
              placeholder='请输入'
              onChangeText={(t)=>this.textInputValueChange(t)}
            />
          </View>
          <TouchableOpacity style={styles.btn} onPress={()=>this.btnClick(1)}>
            <Text style={styles.btn_text}>搜索</Text>
          </TouchableOpacity>
        </View>
     );
   }
 }

 const styles=StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: 45,
      marginTop: 10,
    },
    input_out: {
      flex: 1,
    },
    input: {
      height: 45,
      borderWidth: 1,
      borderColor: '#CCC',
      borderRadius: 4,
      marginLeft: 5,
      paddingLeft: 5,
    },
    btn: {
      width: 55,
      height: 45,
      marginLeft: 5,
      marginRight: 5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#23BEFF',
    },
    btn_text: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#FFF'
    }
 })
