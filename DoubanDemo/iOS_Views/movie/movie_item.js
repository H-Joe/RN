import React ,{ Component } from "react";
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
 } from "react-native";

 export class MovieItem extends Component {
   render () {
     var movie = this.props.movie;
     var actors = [];
     movie.casts.forEach((item, index) => {
       actors.push(item.name)
     });

     return (
      <TouchableOpacity style={styles.item} {...this.props} activeOpacity={0.6}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} resizeMode='contain' source={{uri: movie.images.medium}}/>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text} numberOfLines={1}>名称：{movie.title}</Text>
          </View>
          <View style={styles.textContainer}>
             <Text style={styles.text} numberOfLines={1}>演员：{actors.join(' ')}</Text>
          </View>
          <View style={styles.textContainer}>
             <Text style={styles.text} numberOfLines={1}>评分：{movie.rating.average}</Text>
          </View>
          <View style={styles.textContainer}>
             <Text style={styles.text} numberOfLines={1}>时间：{movie.year}</Text>
          </View>
          <View style={styles.textContainer}>
             <Text style={styles.text} numberOfLines={1}>标签：{movie.genres}</Text>
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
    height: 110,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: 'black',
  }
 });
