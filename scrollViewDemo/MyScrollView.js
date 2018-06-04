import React ,{ Component } from "react";
import { 
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl
 } from "react-native";

 export  class MyScrollView extends Component {
   constructor(props) {
     super(props);
     this.state={
       _resfreshing: false
     }
   }
   _onScrollBeginDrag(){
    console.log('开始拖拽');
   }
   _onScrollEndDrag(){
     console.log('结束拖拽');
   }
   _onMomentumScrollBegin(){
     console.log('开始滚动');
   }
   _onMomentumScrollEnd(e){
     console.log('滚动结束');
    // var offsetX = e.nativeEvent.contentOffset.x;
    // var currentIndex = Math.floor(offsetX / 100);//取整数
    // var sc = this.refs.scrollView;
    // sc.scrollTo({x: 100, y: 0, animated: true})

   }
   _refresh(){
     console.log('刷新开始');
     this.setState(()=>{
       return { _resfreshing: true };
     })
    setTimeout(() => {
      this.setState({ _resfreshing: false })
      console.log('刷新结束');
    }, 5000);
   }
    render () {
      var _refc = (
        <RefreshControl 
          refreshing={this.state._resfreshing}
          tintColor='red'
          title='正在加载...'
          onRefresh={()=>this._refresh()}/>
      );
      return (
        <View style={styles.container}>
          <ScrollView 
            style={styles.scr}
            ref='scrollView'
            onScrollBeginDrag={()=>this._onScrollBeginDrag()}
            onScrollEndDrag={()=>this._onScrollEndDrag()}
            onMomentumScrollBegin={()=>this._onMomentumScrollBegin()}
            onMomentumScrollEnd={(e)=>this._onMomentumScrollEnd(e)}
            refreshControl={_refc}>
            <View style={[styles.view, {backgroundColor: 'yellow',}]}></View>
            <View style={[styles.view, {backgroundColor: 'blue',}]}></View>
            <View style={[styles.view, {backgroundColor: 'red',}]}></View>
          </ScrollView>
        </View>
      );
    }
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  scr: {
    marginTop: 25,
    backgroundColor: '#CCCCCC',
    flex: 1,
  },
  view: {
    margin: 15,
    height: 300,
    flex: 1,
  }
 });  