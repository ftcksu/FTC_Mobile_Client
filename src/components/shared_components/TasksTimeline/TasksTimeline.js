import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { TasksMonthTimeline } from "../../";moment
import * as lodash from "lodash";
import * as moment from "moment";

const dumbData = [
  {
      "description": "Hic ut sed ut debitis. Minus delectus rerum ratione vero iusto maiores dolorem voluptatem. Autem quod delectus cum necessitatibus temporibus nesciunt et.",
      "date": "2019-06-17"
  },
  {
      "description": "Asperiores reprehenderit facere qui porro. Sed id unde alias aut ea. Reprehenderit ratione debitis hic dolores. Praesentium est et repudiandae dolore voluptatum. Dolorem adipisci blanditiis eveniet quaerat perferendis.",
      "date": "2019-06-17"
  },
  {
      "description": "Et qui omnis sit provident quia perferendis ut. Et voluptatem quas reprehenderit quidem. Illo ipsum blanditiis quidem. Temporibus unde quo blanditiis quas similique omnis. Temporibus adipisci officia aut consequatur provident.",
      "date": "2019-07-17"
  },
  {
      "description": "Accusamus molestiae qui blanditiis nemo non iste error. Unde id ut sapiente exercitationem aut similique. Autem voluptas ex odio dolores aut corporis. Dolor nisi ipsam cum asperiores.",
      "date": "2019-07-17"
  }
]
export class TasksTimeline extends Component {
  _monthName = item => moment(item.created_at, 'YYYY-MM-DD').format('MMM');
  _getGroupedData = (arr) => lodash.groupBy(arr, this.monthName);

  componentDidMount(){
    console.log(_getGroupedData(dumbData));
  }
  render() {

    return (
      <TasksMonthTimeline/>
    )
  }
}
