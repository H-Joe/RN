import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from "react-native";
import { Header } from "./../Custom/Header";
import { SearchBar  } from "./../Custom/searchBar";
import { APIs } from "./../Custom/service";
import { Util } from "./../Custom/util";
import { MovieItem } from "./movie_item";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as movieActions from "../../Actions/Movie/movieAction";
class Movie extends Component {
  static defaultProps = {
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
      <Header
      hiddenLeft hiddenRight
      centerView={
        <SearchBar
        placeholder='请输入电影名称'
        onChangeText={(t) => this._changeText(t)}
        onPress={() => this._searchAction()}/>
      }/>
      <FlatList
      style={{flex: 1,}}
      keyExtractor={this._extraUniqueKey}
      data={this.props.dataSource}
      ItemSeparatorComponent={()=><View style={{height: 1, backgroundColor: '#efeff4',}}></View>}
      renderItem={({item})=>(this._renderRow(item))}
      onRefresh={this._onRefresh.bind(this)}
      refreshing={this.props.isRefreshing}
      onEndReachedThreshold={0}
      onEndReached={this._onEndReached.bind(this)}
      ListFooterComponent={this._renderFooter}
      />
      {
        this.props.isLoading?
        Util.loading : null
      }
      </View>
    )
  }
  componentDidMount() {
    this._onRefresh();
  }
  _renderRow(movie){
     return <MovieItem movie={movie} onPress={(title,alt)=> this._pushDetailVC(movie.title, movie.alt)}/>
   }
  _renderFooter=()=>{
     return (
       this.props.isLoadMore ?
        <View style={{ height: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator/>
          <Text style={{}}>正在加载...</Text>
        </View>
        :null
    )
   }
_pushDetailVC(title, url) {
  this.props.navigation.navigate('MovieDetail', {title: title, url: url});
}
  _changeText(text){
     this.props.changeSearchKeywordAction(text);
   }
   componentWillReceiveProps(nextProps){
     if (nextProps !== this.props) {
       if (nextProps.error) {
         return alert(nextProps.error);
       }
       if (!nextProps.isLoading && (nextProps.dataSource === undefined || nextProps.length === 0)) {
         return alert('未找到相关电影');
       }
     }
   }
   _searchAction() {
     if (this.props.keyword) {
      const url = APIs.movie_search + `?count=${this.props.page}&q=${this.props.keyword}`;
      this.props.getMovieListAction(url, true, false, false);
     }else{
       this._onRefresh();
     }

   }
   _onEndReached() {
     //上拉加载更多
     if (this.props.isLoading || this.props.dataSource === undefined || this.props.dataSource.length === 0 || this.props.total === undefined|| this.props.dataSource.length >= this.props.total) {
       return;
     }
     console.log('---- 上拉加载 -----');
     let url = APIs.movie_in_theaters + `?count=${this.props.page}&start=${this.props.dataSource.length}`;
     if (this.props.keyword.length) {
       url = APIs.movie_search + `?count=${this.props.page}&start=${this.props.dataSource.length}&q=${this.props.keyword}`;
     }
     this.props.getMovieListAction(url, true, true, false);
   }
   _onRefresh() {
     //下拉刷新
     console.log('---- 下拉刷新 -----');
     if (this.props.isLoading) {
       return;
     }
     let url = APIs.movie_in_theaters + `?count=${this.props.page}`;
     if (this.props.keyword.length) {
       url = APIs.movie_search + `?count=${this.props.page}&q=${this.props.keyword}`;
     }
     this.props.getMovieListAction(url, true, false, true);
   }
   _extraUniqueKey(item, index) {
     return 'index' + index + item;
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default connect(
  state => ({
    page: state.movieListReducer.page,
    total: state.movieListReducer.total,
    dataSource: state.movieListReducer.dataSource,
    isLoading: state.movieListReducer.isLoading,
    isRefreshing: state.movieListReducer.isRefreshing,
    isLoadMore: state.movieListReducer.isLoadMore,
    keyword: state.movieSearchKeywordReducer.keyword
  }),
  dispatch => bindActionCreators(movieActions, dispatch)
)(Movie)