import React, { Component } from 'react';
import PointList from '../../components/PointList';
import { ScrollView } from "react-native";
import PointListTotal from '../../dummy_data/userDataPointTotal.json'
import PointListWeekly from '../../dummy_data/userDataPointWeekly.json'

import { SearchBar } from 'react-native-elements';
import  {AttendToggle}  from "../Events/AddEvent/AttendToggle";


export class PointsListScreen extends Component {

    switchList = (type) =>{
        type ==0 ? this.setState({'members':PointListWeekly }) : this.setState({'members':PointListTotal }) 
    }

    state = {
        search: '',
        pointListType: 'total',
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
        console.log(tmp);
        
        return tmp;
      }
    render() {
        const { search,members } = this.state
        filteredList = this.renderList(search)
        return (
            <ScrollView style={{marginTop:30}} >
                <SearchBar
                    lightTheme={true}
                    round={true}
                    platform={'ios'}
                    containerStyle={{backgroundColor:'transparent', width:'90%', alignSelf:'center'}}
                    inputContainerStyle={{backgroundColor:'#eeeeee'}}
                    placeholder="بحث عن الأعضاء"
                    onChangeText={text => this.setState({'search' : text})}
                    value={search}
                />
                <AttendToggle firstButton={'المجموع'} secondButton={'الاسبوعية'} handelPress={this.switchList} style={{width:'80%', alignSelf:'center'}} />
                <PointList data={filteredList} />
            </ScrollView>
        );
    }
}
