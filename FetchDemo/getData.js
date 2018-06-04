import React ,{ Component } from "react";
import { 
  StyleSheet,
  View,
  Text,
  TouchableOpacity
 } from "react-native";


function getAction(url) {
  var ops = {
    method: 'GET'
  }
  fetch(url, ops)
  .then((respose)=>{
    return respose.text();
  })
  .then((responseText)=>{
    alert(responseText);
  })
  .catch((error)=>{
    alert(error);
  })
}

function postAction(url) {
  const formData = new FormData();
  formData.append('username', 'abc'),
  formData.append('password', '123')
  var opts = {
    method: 'POST',
    body: formData
  }
  fetch(url, opts)
  .then((response) => {
    return response.text();
  })
  .then((responseText) => {
    alert(responseText);
  })
  .catch((error) => {
    alert(error);
  })

  
}
 export class getData extends Component {
   render () {
     return (
      <View style={styles.container}>
        <TouchableOpacity onPress={getAction.bind(this, 'http://project.lanou3g.com/projects/bj/reactnative/login.php?username=abc&password=123')}>
           <View style={styles.btn}>
            <Text>Get</Text>
          </View>
        </TouchableOpacity>
         <TouchableOpacity onPress={postAction.bind(this, 'http://project.lanou3g.com/projects/bj/reactnative/login.php')}>
           <View style={styles.btn}>
             <Text>Post</Text>
           </View>
         </TouchableOpacity>
      </View>
     )
   }
 }

 const styles = StyleSheet.create ({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: 'cyan',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btn: {
    width: 60,
    height: 30,
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  }
 });