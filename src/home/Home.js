import React, { Component } from 'react';
import { View } from 'react-native';
import InfoCardList from '../components/InfoCardList';
import content from '../dummy_data/InfoCardData.json';

export class Home extends Component {

    renderLatestProjects() {
        return (
            <InfoCardList
            title={'أحدث المشاريع'}
            listOfData={content}
            hasLineSeperator
            />
        );
    }

    renderImportantNews() {
        return (
            <InfoCardList
            title={'إعلانات هامة'}
            listOfData={content}
            hasLineSeperator
            />
        );
    }

    renderNotImportantNews() {
        return (
            <InfoCardList
            title={'إعلانات غير هامة'}
            listOfData={content}
            hasLineSeperator={false}
            />
        );
    }

    render() {
        return (
            <View>
                {this.renderLatestProjects()}
                {this.renderImportantNews()}
                {this.renderNotImportantNews()}
            </View>
        );
    }
}
