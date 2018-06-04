import React ,{ Component } from "react";
import { 
  StyleSheet,
  View,
  Text,
  ListView
 } from "react-native";

 var contents =[
   '习近平与海南跨越40年的深情故事',
   '2018，春天里的改革故事',
   '习近平：乡村振兴要靠产业 产业发展要有特色',  
   '习近平《开放共创繁荣 创新引领未来》单行本出版',
   '人民日报评论员：坚定不移走改革开放之路',
   '牢记统帅嘱托 汇聚强军兴军的磅礴力量',
   '一季度我国贸易顺差3261.8亿元 学宪法守宪法',
   '人民海军海陆空协同发展 海军多兵种打造海上长城',
   '45秒 带你开启美好新海南',
   '国家邮政局: 快捷快递在部分地区运行异常 请慎用',
   '教育部印发意见 设立国家安全学一级学科',
   '机构改革后中央部门首晒预算 新部门把钱花在哪？',
   '网易游戏最近几款大热游戏是创新还是抄袭？',
   '工信部调整钢铁规范企业名单 撤销19家整改12家',
   '中国投身太空环保不遗余力 彰显大国担当',
   '香港将推国歌宣传资料 配合《国歌法》本地立法',
   '铁总转让高铁WiFi公司49 % 股权 互联网巨头或竞标',
   '网络理政的成都实践 推动社会治理创新',
   '扎克伯格国会鏖战10小时 揭露了哪些真相？',
   '俄公布官员年收入：副总理最富有 一年逾3亿人民币',
   '美国威胁拉美国家：认清楚中美谁才是你们的“大哥”',
   '朴槿惠放弃上诉！韩媒：她自知靠法律斗争没啥用',
   '杜特尔特：中国之行将为菲律宾人创造一万个工作机会',
   '厄瓜多尔3名被武装绑架记者遇害 将重启军事打击'
 ]
 export class MyListView extends Component {
   constructor(props) {
     super(props);
     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
     this.state={
      dataSource: ds.cloneWithRows(contents)
     }
   }
   _renderRow(rowData){
     return (
       <View style={styles.row}>
         <Text style={styles.content} numberOfLines={2}>{rowData}</Text>
       </View>
     )
   }
   _renderHeader (){
     return (
       <View style={styles.header}>
         <Text style={styles.header_text}> 热点要闻 </Text>
         <View style={styles.header_line}></View>
       </View>
     )
   }
   _renderSeparator (sectionID, rowID) {
    return (
      <View style={styles.separator} key={sectionID+rowID}></View>
    )
   }
   render () {
     return (
       <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderHeader={this._renderHeader}
        renderSeparator={this._renderSeparator}
        initialListSize={10}
       />
     )
   }
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 25,
  },
  header: {
    height: 44,
    backgroundColor: '#F5FCFF',
  },
  header_text: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    // textAlign: 'center',
    lineHeight: 44,
    paddingLeft: 15,
  },
  header_line: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  row: {
    justifyContent:'center',
    // alignItems: 'center',
    padding: 10,
    // height: 30,
    // borderBottomWidth: 1,
    // borderColor: '#CCCCCC',
  },
  content: {
    flex: 1,
    fontSize: 15,
    // lineHeight: 100
    paddingLeft: 15,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  }
 });