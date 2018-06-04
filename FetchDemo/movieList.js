import React, { Component } from "react";
import { 
  StyleSheet,
  View,
  Text,
  ListView
 } from "react-native";

 export class MyMovieList extends Component {
   constructor(props) {
     super(props);
     var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1!==r2});
     this.state = {
       loading: true,
       dataSource: ds
     }
   }
   componentDidMount () {
     this._getData();
   }
   _getData() {
     //网路请求数据
     setTimeout(() => {
       this.setState({
         loading: false,
         dataSource: this.state.dataSource.cloneWithRows(['row1', 'row2', 'row3'])
       })
     }, 5000);
   }
   render (){
     if (this.state.loading) {
       return this._renderLoadingView();
     }else{
       return (
         <ListView
         style={{flex: 1, backgroundColor: '#F5FCFF',marginTop: 25,}}
         dataSource={this.state.dataSource}
         initialListSize={10}
         renderRow={this._renderListViewRow.bind(this)}
         renderSeparator={this._renderListViewSeparator.bind(this)}/>
       );
     }
   }

   _renderLoadingView () {
    return (
      <View style={{flex: 1, marginTop: 25, backgroundColor: 'cyan', justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold',}}>正在加载。。。</Text>
      </View>
    );
   }

   _renderListViewRow(text) {
     return (
       <View style={{flex: 1,padding: 5,}}>
         <Text style={{padding: 10, fontSize: 15,}}>{text}</Text>
       </View>
     )
   }

   _renderListViewSeparator (sectionID, rowID) {
     return(
       <View style={{height: 0.5, backgroundColor: '#CCCCCC',}} key={sectionID+rowID}></View>
     )
   }
 }