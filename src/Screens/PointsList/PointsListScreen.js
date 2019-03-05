import React, { Component } from 'react';
import PointList from '../../components/PointList';
import { ScrollView } from "react-native";
import PointListTotal from '../../dummy_data/userDataPointTotal.json'
import PointListWeekly from '../../dummy_data/userDataPointWeekly.json'
import { SearchBar } from 'react-native-elements';
import  {AttendToggle}  from "../Events/AddEvent/AttendToggle";
import FTCStyledText from '../../components/FTCStyledText';
import { TextStyles } from "../../styles/TextStyles"

    const {
      header
    } = TextStyles;


export class PointsListScreen extends Component {

    switchList = (type) =>{
        type == 0 ? this.setState({'members':PointListWeekly }) : this.setState({'members':PointListTotal }) 
    }

    handelCardPress = () =>{
        this.props.navigation.navigate();
    }

    state = {
        search: '',
        members:PointListTotal
      };

      updateSearch = search => {
        this.setState({ search });
      };

      renderList(search) {          
        const { members } = this.state;
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
            <ScrollView style={styles.container} >
                <FTCStyledText style={header} > قائمة النقاط </FTCStyledText>
                <SearchBar
                    lightTheme={true}
                    round={true}
                    platform={'ios'}
                    containerStyle={styles.SearchBarContainerStyle}
                    inputContainerStyle={styles.SearchInputContainerStyle}
                    placeholder="بحث عن الأعضاء"
                    onChangeText={text => this.setState({'search' : text})}
                    value={search}
                />
                <AttendToggle firstButton={'المجموع'} secondButton={'الاسبوعية'} handelPress={this.switchList} style={{width:'80%', alignSelf:'center'}} />
                <PointList style={styles.pointList} data={filteredList} />
            </ScrollView>
        );
    }
}
const styles = {
    container: {
        marginTop:30
    },
    SearchBarContainerStyle: {
        backgroundColor:'transparent',
        width:'90%',
        alignSelf:'center'
    },
    SearchInputContainerStyle: {
        backgroundColor:'#eeeeee'
    },
    pointList:{
        marginTop:15
    }
}
