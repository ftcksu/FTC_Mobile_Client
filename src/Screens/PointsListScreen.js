import React, { Component } from 'react';
import { ScrollView, SafeAreaView, Alert, ActivityIndicator, View } from "react-native";
import { SearchBar } from 'react-native-elements/src/index';
import { AttendToggle, FTCStyledText, PointList } from "../components";
import { getLeaderboard, pointListAdapter, loadingStyle, primaryColor, TextStyles } from "../global";
const {
  header
} = TextStyles;

let weeklyList,totalList = [];

export class PointsListScreen extends Component {


  componentWillMount(){
    this.fetchLeaderboard(true);
  }

  fetchLeaderboard = async (initialFetch) => {
    this.setState({isLoading:initialFetch})
    getLeaderboard().then(response => {
      if(response.status == 200){
          this.sortList(response.data);
      }else{
        Alert.alert('تستهبل؟', 'يا رقمك السري او الجامعي غلط، شيك عليهم', [{text: 'يصير خير'}]);
        
      }
      this.setState({isLoading:false})
    })
    .catch(error => {
      Alert.alert('مشكل كبير', 'يا ان نتك خربان ولا سيرفرنا فاقع', [{text: 'جي جي'}]);
      console.log(error);
      this.setState({isLoading:false})
    })
  }

  refreshLeaderboard = async () =>{
    this.setState({
      'isRefreshing' : true
    })
    await this.fetchLeaderboard(false)
    this.setState({
      'isRefreshing' : false
    })
  }

  sortList = (data) =>{
    // used parser to copy the array and every object contained in it (Deep copy)
    weeklyList = JSON.parse(JSON.stringify(data));
    totalList = JSON.parse(JSON.stringify(data));

    totalList = pointListAdapter(totalList, 1)
    weeklyList = pointListAdapter(weeklyList, 0)

    this.state.listType == 0 ? this.setState({ 'members': weeklyList }) : this.setState({ 'members': totalList })
  }

  switchList = (type) => {
    type == 0 ? this.setState({ 'members': weeklyList }) : this.setState({ 'members': totalList })
    this.setState({listType : type})
  }

  handelCardPress = (item) => {
    // console.log('handelCardPress ',item);
    this.props.navigation.navigate('UserProfile', {user: item});
  }

  state = {
    search: '',
    members: [],
    listType: 1,
    isLoading: false,
    isRefreshing: false,
  };

  updateSearch = search => {
    this.setState({ search });
  };

  renderList(search) {
    const { members } = this.state;    
    if (search === '') {
      return members;
    }
    const tmp = members.filter((member) => (member.user.first_name + ' ' + member.user.last_name).includes(search));

    return tmp;
  }

  renderHeader = () =>{
    return (
      <View style={styles.container} >
          <FTCStyledText style={header} > قائمة النقاط </FTCStyledText>
          <SearchBar
            lightTheme={true}
            round={true}
            platform={'ios'}
            containerStyle={styles.SearchBarContainerStyle}
            inputContainerStyle={styles.SearchInputContainerStyle}
            placeholder="بحث عن الأعضاء"
            onChangeText={text => this.setState({ 'search': text })}
            value={this.state.search}
            inputStyle={{ textAlign: 'right' }}
          />
          <AttendToggle firstButton={'المجموع'} secondButton={'الاسبوعية'} selectedIndex={this.state.listType} handelPress={this.switchList} style={{ width: '80%', alignSelf: 'center' }} />
        </View>
    )
  }
  render() {
    const filteredList = this.renderList(this.state.search)
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ActivityIndicator style={loadingStyle} animating={this.state.isLoading} size="large" color={primaryColor} />
        <PointList refreshing={this.state.isRefreshing} onRefresh={this.refreshLeaderboard} header = {this.renderHeader} style={styles.pointList} data={filteredList} onCardPress = {this.handelCardPress} />
      </SafeAreaView>

    );
  }
}
const styles = {
  container: {

  },
  SearchBarContainerStyle: {
    backgroundColor: 'transparent',
    width: '90%',
    alignSelf: 'center',
  },
  SearchInputContainerStyle: {
    backgroundColor: '#eeeeee',
  },
  pointList: {
    marginTop: 15
  }
}
