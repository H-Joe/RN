import React, { Component } from "react";
import { 
  StyleSheet,
  View,
  Text,
  Alert
 } from "react-native";

 export class News extends Component {
   show (title) {
    //  alert(title);
    Alert.alert('提示', title);
   }
   render () {
     var newsComponents =[];
     this.props.news.forEach((item, index) => {
       var text = (
        <Text
          onPress={this.show.bind(this, item)}
          style={styles.news_item}
          numberOfLines={2}
          key={index}>
          {item}
        </Text>
       );
       newsComponents.push(text);
     });
    //  for (const i in this.props.news) {
    //    if (this.hasOwnProperty(i)) {
    //      const element = this.props[i];
    //      var text = (
    //         <Text
    //           style={styles.news_title}
    //           numberOfLines={2}
    //           key={i}>
    //           {element}
    //         </Text>
    //      );
    //      newsComponents.push(text);
    //    }
    //  }
     return (
      <View style={styles.container}>
        <Text style={styles.news_title}>今日要闻</Text>
        {newsComponents}
      </View>
     );
   }
 }
 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   news_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CD1D1C',
    marginLeft: 10,
    marginTop: 15,
   },
   news_item: {
     marginLeft: 10,
     marginTop: 10,
     marginRight: 10,
     fontSize: 15,
     lineHeight: 30
   }

  
 })
