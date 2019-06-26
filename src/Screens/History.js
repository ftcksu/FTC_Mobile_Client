import React, { Component } from 'react'
import { View, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native'
import { TasksMonthTimeline, ScreenBackground, FTCStyledText, TasksTimeline} from "../components";
import Images from "../../assets/images";

const tasks = [
  {
      "description": "لها أصوافاً كثيرة وأفعالاً مختلفة، وحركات متفقة ومضادة، وأنعم النظر في ذلك تصفح الأجسام كلها، لا.",
      "date": "2019-06-23"
  },
  {
      "description": "أسال انه قد انصرف عنه وتباعد من تلك الأشياء الآخر التي يكون له طول وعرض وعمق؛ وهذه المدركات كلها.",
      "date": "2019-05-11"
  },
  {
      "description": "اخفى قضباناً منه. فكان ذلك اعتراض على فعل الفاعل. وهذا الاعتراض مضاد لما يطلبه من القرب منه.",
      "date": "2019-04-16"
  },
  {
      "description": "هذه القوى تكون مدركة بالقوة وتكون مدركة بالفعل، وكل واحدة من هذه الثلاثة قد يقال له قلب ولكن لا.",
      "date": "2019-06-22"
  }
]
export class History extends Component {
  onCancelPress=()=>{
    this.props.navigation.pop()
  }

  renderHeader = () => {
    return (
      <View style={styles.topContainer} >
          <View style={styles.emptyLeftView} />
          <FTCStyledText style={styles.title} > تاريخ نقاطك </FTCStyledText>
          <TouchableOpacity onPress={this.onCancelPress}>
            <Image source={Images.cancel} style={styles.icon} />
          </TouchableOpacity>
      </View>
    )
  }
  

  render() {
    return (
      <View style={{flex:1}} >
        <ScreenBackground/>
        <TasksTimeline tasks={tasks} header = {this.renderHeader} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height:"100%",
    width:"100%",
    flex:0,
    marginTop:15
  },
  topContainer:{
    marginTop:30, flexDirection: 'row', width: '100%', justifyContent: 'space-between' 
  },
  emptyLeftView:{
    width:30
  },
  title:{
    fontSize:20,
    fontFamily:'Cairo-Bold',
    color:'white',
    alignSelf:"center"
  },
  flatView:{
    paddingLeft:10,
    marginTop:20
  },
  dateHighlighter:{
    opacity:0.2,
    backgroundColor:'white',
    height: '100%',
    width:"30%",
    borderRadius:120/2,
    position:"absolute",
    top:0,
    right:0,
    marginTop:-10,
  },
  icon: {
    marginRight:10,
    height:35,
    width:35
  },
  flatListContentContainer:{ 
    flexGrow: 0,paddingBottom:25
  }
});