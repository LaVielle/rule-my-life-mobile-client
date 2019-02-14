import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CardList from './components/CardList'

import data_decisions from './data_decisions.json'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CardList decisions={data_decisions}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: 20
  },
});
