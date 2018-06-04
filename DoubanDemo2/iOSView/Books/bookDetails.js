import React ,{ Component } from "react";
import { 
  Text,
  View,
  StyleSheet,
  ScrollView
 } from "react-native";
 import { Header } from "./../Custom/Header";
 import { Util } from "./../Custom/util";
 import { BookItem } from "./../Books/book_item";
 import { APIs } from "./../Custom/service";

 export class BookDetail extends Component {
   constructor(props) {
     super(props);
     this.state = {
       bookData: null
     }
   }
   render(){
     const {state, pop} = this.props.navigation;
     return(
       <View style={styles.container}>
       <Header
       title={state.params.bookTitle}
       onBackPress={()=>{pop()}}
        />
        <ScrollView style={styles.content}>
          {
            this.state.bookData?
            <View>
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
            Util.loading
          }
        </ScrollView>
       </View>
     )
   }
   componentDidMount(){
    this.getData();
   }
   getData() {
     let _this = this;
     var url = APIs.book_detail_id + this.props.navigation.state.params.bookID;
     console.log(url);
     Util.getRequest(url, (result) => {
       _this.setState({
         bookData: result
       })
     }, (error) => {
       alert(error);
     })
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   content: {
     flex: 1,
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
 })