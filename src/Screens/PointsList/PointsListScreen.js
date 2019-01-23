import React, { Component } from 'react';
import PointList from '../../components/PointList';
import data from '../../dummy_data/UserPointCardData'

export class PointsListScreen extends Component {


    render() {
        return (
            <PointList data={data}  />
        );
    }
}
