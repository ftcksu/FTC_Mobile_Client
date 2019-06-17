import React, { Component } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import InfoCardList from '../components/shared_components/InfoCardList';
import content from '../dummy_data/InfoCardData.json';

export class Home extends Component {

    renderLatestProjects() {
        return (
            <InfoCardList
                title={'أحدث المشاريع'}
                listOfData={content.data}
                hasLineSeparator={true}
            />
        );
    }

    renderImportantNews() {
        return (
            <InfoCardList
                title={'إعلانات هامة'}
                listOfData={content.data}
                hasLineSeparator={true}
            />
        );
    }

    renderNotImportantNews() {
        return (
            <InfoCardList
                title={'إعلانات غير هامة'}
                listOfData={content.data}
                hasLineSeparator={false}
            />
        );
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <ScrollView>
                    {this.renderLatestProjects()}
                    {this.renderImportantNews()}
                    {this.renderNotImportantNews()}
                </ScrollView>

            </SafeAreaView>

        );
    }
}

