import React ,{ Component } from "react";
import { 
  Text,
  View,
  StyleSheet,
  FlatList
 } from "react-native";
 import { Header } from "./../Custom/Header";
 import { SearchBar } from "./../Custom/searchBar";
 import { Util } from "./../Custom/util";
 import { BookItem } from "./book_item";
 import { APIs } from "./../Custom/service";
 import { connect } from "react-redux";
 import { bindActionCreators } from "redux";
 import * as bookActions from "../../Actions/Book/bookAction";
 

class Book extends Component {
   constructor(props) {
     super(props);
   }
   render(){
     return(
       <View style={{flex: 1,}}>
       < Header
        hiddenLeft
        hiddenRight
        centerView= {
          <SearchBar 
          placeholder={'请输入图书名称'}
          onPress={()=>this._searchActionn()}
          onChangeText={(t)=>this._changeSearchText(t)}/>
        }
       />
       {
         this.props.isLoading?Util.loading
         :
          <FlatList
          style={{flex: 1, backgroundColor: 'white'}}
          keyExtractor={this._extraUniqueKey}
          data={this.props.dataSource.books}
          ItemSeparatorComponent={()=><View style={{height: 1, backgroundColor: '#efeff4',}}></View>}
          onEndReachedThreshold={1}
          renderItem={({item}) => (
            <BookItem book={item} onPress={this._pushBookDetailVC.bind(this, item.id, item.title)}/>
          )}
          />
       }
       </View>
     )
   }

   getData() {
     var url = APIs.book_search + '?count=20&q=' + this.props.keyword;
     console.log('-----',url);
     this.props.getBookListAction(url, true);
   }
   componentWillReceiveProps(nextProps){
    if (this.props !== nextProps) {
      if (nextProps.error) {
          return alert(nextProps.error);
        }
        if (!nextProps.isLoading && (!nextProps.dataSource.books || nextProps.dataSource.books.length == 0)) {
          return alert('未查找到相关书籍');
        }
    }
   }
   componentDidMount() {
     this.getData();
   }
   _changeSearchText(text) {
     this.props.changeSearchKeywordAction(text);
   }
   _searchActionn() {
     this.getData();
   }
   _pushBookDetailVC(bookID, bookTitle) {
     this.props.navigation.navigate('BookDetail', {bookID: bookID, bookTitle: bookTitle});
   }

  _extraUniqueKey(item, index) {
     return 'index' + index + item;
   }
 }

 export default connect(
   state => ({
    // bookReducer: state.bookReducer,
    dataSource: state.bookReducer.dataSource,
    isLoading: state.bookReducer.isLoading,
    error: state.bookReducer.error,
    keyword: state.bookSearchKeywordReducer.keyword,
   }),
   dispatch => bindActionCreators(bookActions, dispatch)
 )(Book)