import React ,{ Component } from "react";
import { 
  StyleSheet,
  View,
  Text,
  ScrollView,
  ListView,
  RefreshControl,
  ActivityIndicator
 } from "react-native";
import { SearchBar } from "./../commen/searchBar";
import { Util } from "./../commen/util";
import { APIs } from "./../commen/service";
import  MovieDetail  from "./../commen/customWebView";
import { MovieItem } from "./movie_item";

const  RefreshType = {
  New: 0,
  More: 1, 
}
 export class MovieList extends Component {
   static propType ={
    //  page: ReactPropTypes.number.isrequired,
   }
   static defaultProps ={
     page: 10,
   }
   constructor(props) {
     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!==r2});
     super(props);
     this.total = 0,
     this.state = {
       dataSource: ds,
       keywords: '',
       isRefreshing: false,// 下拉刷新
       isLoadingMore: false,// 上拉加载
       isLoading: false, // 是否正在加载数据
     }
   }
   render () {
     return (
       <View style={{flex: 1,}}>
         <SearchBar
           placeholder='请输入电影名称'
           onChangeText={(t) => this._changeText(t)}
           onPress={() => this._searchAction()}
         />
         <ListView
           ref={'listview'}
           contentInset={{bottom: -49}}
           dataSource={this.state.dataSource}
           initialListSize={10}
           renderRow={this._renderRow.bind(this)}
           renderFooter={this._renderFooter.bind(this)}
           renderSeparator={this._renderSeparator.bind(this)}
           onEndReached={this._onEndReached.bind(this)}
           onEndReachedThreshold={10}
           enableEmptySections={true}
           keyboardDismissMode={'on-drag'}//interactive on-drag
           refreshControl={
             <RefreshControl
               title={'正在刷新...'}
               refreshing={this.state.isRefreshing}
               onRefresh={this._onRefresh.bind(this)} />
           }
         />
         {
           !this.state.isLoading?null:
            Util.loading
         }
       </View>
     )
   }
   componentDidMount(){
    this._onRefresh();
   }
   _changeText(text){
     this.setState({keywords: text});
   }
   _pushDetailVC (title, url) {
     var route = {
       component: MovieDetail,
       passProps:{
         backName: '电影',
         barTitle: title,
         url: url
       }
     }
     this.props.navigator.push(route);
   }
   _renderRow(movie){
     return <MovieItem movie={movie} onPress={(title,alt)=> this._pushDetailVC(movie.title, movie.alt)}/>
   }
   _renderSeparator(sectionID, rowID){
     return <View style={{height: 1,backgroundColor: '#CCCCCC',}} key={sectionID+rowID}></View>
   }
   _renderFooter(){
     return (
       this.state.isLoadingMore?
        <View style={{ height: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator/>
          <Text style={{}}>正在加载...</Text>
        </View>
        :null
    )
   }

   _searchAction() {
     const url = APIs.movie_search + `?count=${this.props.page}&q=${this.state.keywords}`;
     let _this = this;
     this.setState({isLoading: true})
     this._getData(url, (resp) => {
       _this.setState({ isLoading: false });
       if (resp === undefined || resp.length === 0)
        {
        alert('未找到相关电影');
        return ;
        };
       _this.dataSource = [];
       _this._reloadData(resp);

     });
   }
   _onEndReached(){    
    //listView滑动到底部触发
    //上拉加载更多
     if (this.state.isLoading || this.dataSource === undefined || this.dataSource.length === 0 || this.dataSource.length >= this.total) {
       return;
     }
    //  console.log(this.refs.listview.scrollProperties.offset, this.refs.listview.scrollProperties.visibleLength, this.refs.listview.scrollProperties.offset + this.refs.listview.scrollProperties.visibleLength, this.refs.listview.scrollProperties.contentLength);
    //  if ( this.refs.listview.scrollProperties.visibleLength >= this.refs.listview.scrollProperties.contentLength) {
    //    return;
    //  }
     console.log('---- 上拉加载 -----');
     this._setLoadingState(RefreshType.More, true);
     let url = APIs.movie_in_theaters + `?count=${this.props.page}&start=${this.dataSource.length}` ;
     if (this.state.keywords.length) {
       url = APIs.movie_search + `?count=${this.props.page}&start=${this.dataSource.length}&q=${this.state.keywords}`;
     }
     let _this = this;
     this._getData( url, (resp) => {
       _this._setLoadingState(RefreshType.More, false);
       if (resp === undefined) { return };
       if (resp.length === 0) { return };
       _this._reloadData(resp);
     });
   }
   _onRefresh(){
     // 上拉或下拉刷新方法
     //下拉刷新
     console.log('---- 下拉刷新 -----');
     if (this.state.isLoading) {
       return;
     }
     this._setLoadingState(RefreshType.New,true);
     let url = APIs.movie_in_theaters + `?count=${this.props.page}`;
     if (this.state.keywords.length) {
       url = APIs.movie_search + `?count=${this.props.page}&q=${this.state.keywords}`;
     }     
     let _this = this;
     this._getData(url, (resp)=>{
       _this._setLoadingState(RefreshType.New, false);
       if (resp === undefined) { return };
       if (resp.length === 0) {
         alert('未找到相关电影');
         return;
       }
       _this.dataSource = [];
       _this._reloadData(resp);
     });
   }
   _getData(url, callback){
     Util.getRequest(url, (resp) => {
       if (!resp.subjects || resp.subjects.length == 0) {
         return callback([]);
       }
       return callback(resp);
     }, (err) => {
       alert(err);
       return callback(null);
     })
   }
   _setLoadingState(refType, isFinish) {     
     refType === RefreshType.New ? this._setRefreshingState(isFinish) : this._setLoadingMoreState(isFinish);
   }
   _setRefreshingState(isFinish){     
     this.setState({
       isRefreshing: isFinish,
       isLoading: isFinish,
     })
   }
   _setLoadingMoreState(isFinish) {
     this.setState({
       isLoadingMore: isFinish,
       isLoading: isFinish,
     })
   }
   _reloadData(resp){
     let data = resp.subjects;
     this.total = resp.total;     
     this.dataSource = this.dataSource.concat(data);
     this.setState({
       dataSource: this.state.dataSource.cloneWithRows(this.dataSource)
     })
   }

   
 }

 const styles = StyleSheet.create({

 });