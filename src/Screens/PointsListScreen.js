import React, { Component } from 'react';
import PointList from '../components/local_components/PointList/PointList';
import { ScrollView, SafeAreaView, Alert } from "react-native";
import { SearchBar } from 'react-native-elements/src/index';
import { AttendToggle } from "../components/shared_components/AttendToggle";
import FTCStyledText from '../components/shared_components/FTCStyledText';
import { TextStyles } from "../global/styles/TextStyles"
import { getLeaderboard } from "../global/actions/ApiCalls";
import { pointListAdapter } from "../global/actions/appActions";

const {
  header
} = TextStyles;

let weeklyList,totalList = [];

export class PointsListScreen extends Component {


  componentWillMount(){
    this.fetchLeaderboard();
  }

  fetchLeaderboard = () => {
    getLeaderboard().then(response => {
      console.log(response.status);
      if(response.status == 200){
          this.sortList(response.data);
      }else{
        Alert.alert('تستهبل؟', 'يا رقمك السري او الجامعي غلط، شيك عليهم', [{text: 'يصير خير'}]);
        
      }
    })
    .catch(error => {
      Alert.alert('مشكل كبير', 'يا ان نتك خربان ولا سيرفرنا فاقع', [{text: 'جي جي'}]);
      console.log(error);
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

  handelCardPress = () => {
    this.props.navigation.navigate('UserProfile');
  }

  state = {
    search: '',
    members: [],
    listType: 1
  };

  updateSearch = search => {
    this.setState({ search });
  };

  renderList(search) {
    const { members } = this.state;
    console.log('renderList ', members[0]);
    
    if (search === '') {
      return members;
    }
    const tmp = members.filter((member) => (member.first_name + ' ' + member.last_name).includes(search));

    return tmp;
  }
  render() {
    const { search } = this.state
    filteredList = this.renderList(search)
    return (
      <SafeAreaView style={{ flex: 1 }}>

        <ScrollView style={styles.container} >
          <FTCStyledText style={header} > قائمة النقاط </FTCStyledText>
          <SearchBar
            lightTheme={true}
            round={true}
            platform={'ios'}
            containerStyle={styles.SearchBarContainerStyle}
            inputContainerStyle={styles.SearchInputContainerStyle}
            placeholder="بحث عن الأعضاء"
            onChangeText={text => this.setState({ 'search': text })}
            value={search}
            inputStyle={{ textAlign: 'right' }}
          />
          <AttendToggle firstButton={'المجموع'} secondButton={'الاسبوعية'} selectedIndex={this.state.listType} handelPress={this.switchList} style={{ width: '80%', alignSelf: 'center' }} />
          <PointList style={styles.pointList} data={filteredList} onCardPress = {this.handelCardPress} />
        </ScrollView>
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
