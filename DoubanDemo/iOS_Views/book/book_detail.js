import React ,{ Component  } from "react";
import { 
  StyleSheet,
  View,
  Text,
  ScrollView
 } from "react-native";

import { Header } from "./../commen/header";
import { APIs } from "./../commen/service";
import { Util } from "./../commen/util";
import { BookItem } from "./book_item";

 export class BookDetail extends Component {
   constructor(props) {
     super(props);
     this.state ={
       bookData: null
     }
   }
   getData(){
     let _this = this;
     var url = APIs.book_detail_id + this.props.bookID;
     console.log(url);
     Util.getRequest(url, (result)=>{
        _this.setState({bookData: result})
     }, (error)=>{
       alert(error);
     })
   }
  render(){
    return (
      <ScrollView style={styles.container}>
        {
          this.state.bookData ?
            <View>
              <Header 
                initObj={{backName:'图书', barTitle: this.state.bookData.title}}
                navigator={this.props.navigator}/>
              <BookItem book={this.state.bookData}/>
              <View>
                <Text style={styles.title}>图书简介</Text>
                <Text style={styles.text}>{this.state.bookData.summary}</Text>
              </View>
              <View style={{marginTop: 10,}}>
                <Text style={styles.title}>作者简介</Text>
                <Text style={styles.text}>{this.state.bookData.author_intro}</Text>
              </View>
              <View style={{height: 55,}}></View>
            </View>
            :
            <View style={{flex: 1,}}>{Util.loading}</View>
        }
      </ScrollView>
    )
  }

  componentDidMount (){
    this.getData();
  }
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  text: {
    marginLeft: 10,
    marginRight: 10,
    color: '#000D22'
  }
 });