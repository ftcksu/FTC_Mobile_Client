import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { TasksMonthTimeline } from "../../";
import * as _ from "lodash";
	import moment from "moment";

console.disableYellowBox = true;
export class TasksTimeline extends Component {

  state={
    tasks:[]
  }

  componentDidMount(){
    this.setState({
      tasks:this.props.tasks
    })
  }
  
  _getGroupedData(arr){
    return _.groupBy(arr, (item) => moment(item.date, 'YYYY-MM-DD').format('MMM'))
  }

  joinTasksByDate(tasks){
    var groupedData = this._getGroupedData(tasks)
    var monthsName = Object.keys(groupedData)
    var tasks = Object.values(groupedData)
    var joinedArrays = []
    tasks.forEach((element, index) => {
      obj = {
        tasks:element,
        date:monthsName[index]
      }
      joinedArrays.push(obj)
    });
    return(joinedArrays);
  }
  render() {
    const data = this.joinTasksByDate(this.state.tasks);
    return (
          <View >
            <FlatList
                ListHeaderComponent={this.props.header}
                data={data}
                renderItem={({ item, index }) => (
                  <TasksMonthTimeline data ={item} isLast={(index+1 == data.length)} />
                )}
              />
          </View>

    )
  }
}

