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
 

 export class Book extends Component {
   constructor(props) {
     super(props);
     this.state = {
       keywords: 'React',
       loading: true,
       dataSource: []
     }
   }
   render(){
     return(
       <View style={{backgroundColor: 'cyan', flex: 1,}}>
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
         this.state.loading?Util.loading
         :
          <FlatList
          style={{flex: 1, backgroundColor: 'white'}}
          keyExtractor={this._extraUniqueKey}
          data={this.state.dataSource}
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
     this.setState({
       loading: true
     });
     let _this = this;
     var url = APIs.book_search + '?count=20&q=' + this.state.keywords;
     Util.getRequest(url, (data) => {
       if (!data.books || data.books.length == 0) {
         _this.setState({
           loading: false
         })
         return alert('未查找到相关书籍');
       }
       _this.setState({
         loading: false,
         dataSource: data.books
       })
     }, (error) => {
       alert(error);
       _this.setState({
         loading: false
       })
     })
   }
   componentDidMount() {
     this.getData();
   }
   _changeSearchText(text) {
     this.setState({
       keywords: text
     })
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