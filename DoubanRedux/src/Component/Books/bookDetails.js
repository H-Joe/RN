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
 import { connect } from "react-redux";
 import { bindActionCreators } from "redux";
 import * as bookDetailActions from "../../Actions/Book/bookDetailAction";
 import { CollapsibleText } from "../Custom/collaplibleText";

class BookDetail extends Component {
   constructor(props) {
     super(props);
   }
   render(){
     const {state, pop} = this.props.navigation;
     return(
       <View style={styles.container}>
       <Header
       title={state.params.bookTitle}
       onBackPress={()=>pop()}
        />
        <ScrollView style={styles.content}>
          {
            this.props.bookData?
            <View>
              <BookItem book={this.props.bookData} activeOpacity={1}/>
              <View style={{backgroundColor: '#efeff4',height: 0.5, marginHorizontal: 10,}}></View>
              <View>
                <Text style={styles.title}>图书简介</Text>
                <CollapsibleText style={styles.text} numberOfLines={5} expandTextStyle={{color: '#1ec9e9'}}>
                  <Text style={styles.text}>{this.props.bookData.summary?this.props.bookData.summary:'暂无'}</Text>
                </CollapsibleText>
              </View>
              <View style={{backgroundColor: '#efeff4',height: 0.5, margin: 10,}}></View>
              <View>
                <Text style={styles.title}>作者简介</Text>
                <CollapsibleText style={styles.text} numberOfLines={5} expandTextStyle={{color: '#1ec9e9'}}>
                  <Text style={styles.text}>{this.props.bookData.author_intro?this.props.bookData.author_intro:'暂无'}</Text>
                </CollapsibleText>
              </View>
              <View style={{backgroundColor: '#efeff4',height: 0.5, margin: 10}}></View>
              <View>
                <Text style={styles.title}>章节</Text>
                <CollapsibleText style={styles.text} numberOfLines={5} expandTextStyle={{color: '#1ec9e9'}}>
                  <Text style={styles.text}>{this.props.bookData.catalog?this.props.bookData.catalog:'暂无'}</Text>
                </CollapsibleText>
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
    var url = APIs.book_detail_id + this.props.navigation.state.params.bookID;
    this.props.getBookDetailAction(url);
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
       marginVertical: 10,
       marginLeft: 10,
     },
     text: {
       marginHorizontal: 10,
       color: '#e91e63'
     }
 })

 export default connect(
   state => ({
     bookData: state.bookDetailReducer.bookDada,
     error: state.bookDetailReducer.error
   }),
   dispatch => bindActionCreators(bookDetailActions, dispatch),
 )(BookDetail)
