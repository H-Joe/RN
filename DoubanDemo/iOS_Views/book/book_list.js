import React,{ Component } from "react";
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ListView,
  ScrollView
 } from "react-native";

import { Util } from "./../commen/util";
import { SearchBar } from "./../commen/searchBar";
import { APIs } from "./../commen/service";
import { BookItem } from "./book_item";
import { BookDetail } from "./book_detail";

 export class BookList extends Component {
   constructor(props) {
     var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1!==r2})
     super(props);
     this.state = {
       loading: true,
       dataSource: ds,
       keywords: 'React'
     }
   }
   getData(){
     this.setState({loading: true});
     let _this = this;
     var url = APIs.book_search + '?count=20&q=' + this.state.keywords;
     Util.getRequest(url,(data)=>{
      if (!data.books || data.books.length == 0) {
        _this.setState({loading:false})
        return alert('未查找到相关书籍');
      }
       _this.setState({
        loading: false,
        dataSource: this.state.dataSource.cloneWithRows(data.books)
      })
     }, (error)=>{
      alert(error);
       _this.setState({ loading: false })
     })
   }
   render (){
     return (
       //contentContainerStyle={styles.contentContainer}
       <ScrollView
        contentInset={{ bottom: -49, }}
       >
        <SearchBar 
          placeholder={'请输入图书名称'}
          onPress={()=>this._searchActionn()}
          onChangeText={(t)=>this._changeSearchText(t)}
        />
        {
          this.state.loading?
          Util.loading
          :<ListView
            style={{flex: 1,}}
            dataSource={this.state.dataSource}
            initialListSize={10}
            renderRow={(b)=>this._renderRow(b)}
            renderSeparator={()=>this._renderSeparator()}/>
        }
      </ScrollView>
     )
   }
   componentDidMount (){
     this.getData();
   }
   _changeSearchText(text) {
     this.setState({keywords: text})
   }
   _searchActionn(){
     this.getData();
   }
   _pushBookDetailVC (bookID) {
     var detailRoute = {
       component: BookDetail,
       passProps: {
         bookID: bookID
       }
     }
     this.props.navigator.push(detailRoute);
   }

   _renderRow(book) {
    return <BookItem book={book} onPress={(d)=>this._pushBookDetailVC(book.id)}/>
   }
   _renderSeparator(sectionID, rowID){
    return <View style={{height: 1, backgroundColor: '#CCCCCC',}} key={sectionID+rowID}></View>
   }
 }

 const styles = StyleSheet.create({
   contentContainer: {
    //  height: Util.windowSize.height-49,
    //  backgroundColor: 'red',
    }
 });