import React, { Component } from "react";
import { 
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
 } from "react-native";

 export class BookItem extends Component {
   render () {
     var book = this.props.book;
     return (
      <TouchableOpacity style={styles.item} activeOpacity={0.8} {...this.props}>
        <View style={styles.imageContainer}>
           <Image style={styles.image} source={{uri: book.image}}/>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.title}>{book.title}</Text>
          </View>
           <View style={styles.textContainer}>
             <Text style={styles.publisher_author} numberOfLines={1}>{book.publisher}</Text>
           </View>
           <View style={styles.textContainer}>
             <Text style={styles.publisher_author} numberOfLines={1}>{book.author.join(' ')}</Text>
           </View>
           <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
             <Text style={styles.price}>{book.price}</Text>
             <Text style={styles.pages}>共{book.pages}页</Text>
           </View>
        </View>
      </TouchableOpacity>
     )
   }
 }

 const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    height: 120,
    padding: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 100,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
  },
  publisher_author: {
    fontSize: 13,
    color: '#e91e63'
  },
  price: {
    color: '#e91e63',
    fontSize: 16,
  },
  pages: {
    marginLeft: 10,
    color: '#e91e63'
  }

 });